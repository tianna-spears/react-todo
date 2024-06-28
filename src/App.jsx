import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoContainer.jsx/TodoList';
import AddTodoForm from './components/AddTodoForm.jsx';
import MotivationalQuote from './components/MotivationalQuote.jsx';
import './index.css';

const key = 'savedTodoList';
const initialState = [];

const getAsyncList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let newTodoList = (JSON.parse(localStorage.getItem(key)) || initialState);
      resolve({ data: { todoList: newTodoList } });
    }, 2000);
  });
};

async function fetchData(isAscending) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
    }
  };
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default?view=Grid%20view`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    const sortedRecords = data.records
      .filter(record => record.fields.Title)
      .sort((objectA, objectB) => {
        const titleA = objectA.fields.Title?.toLowerCase();
        const titleB = objectB.fields.Title?.toLowerCase();
        if (titleA < titleB) return isAscending ? -1 : 1;
        if (titleA > titleB) return isAscending ? 1 : -1;
        return 0;
      });

    return sortedRecords.map(record => ({
      title: record.fields.Title,
      id: record.id
    }));
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    const todos = await fetchData(isAscending);
    setTodoList(todos);
    setIsLoading(false);
  }, [isAscending]);

  useEffect(() => {
    getAsyncList().then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);

      fetchTodos();
    });
  }, [fetchTodos]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`;
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo.title
        }
      })
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const newTodoWithId = {
        title: data.fields.Title,
        id: data.id
      };
      setTodoList([...todoList, newTodoWithId]);
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  };

  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error('Error removing todo:', error.message);
    }
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Todo List</h1>
            <button onClick={toggleSortOrder}>
              {isAscending ? 'Sort Descending' : 'Sort Ascending'}
            </button>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
            <MotivationalQuote />
          </div>
        } />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
