import React, {useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

const initialState = [];

const getAsyncList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: {todoList: initialState  }});
      }, 2000);
    });
  };

// create Airtable Account

function App() {
  const key = 'savedTodoList';

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } 
      const data = await response.json();
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
  }
 }, [todoList, isLoading]);
  
    const removeTodo = (id) => {
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedTodoList);
  };

    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo]) 
    };

  return (
    <>
      <h1>Todo List!</h1>
            
      <AddTodoForm 
      onAddTodo={addTodo} 
      /> 

  {isLoading ? (
      <p>Loading ...</p>
    ) : (
      <TodoList
       todoList={todoList} 
      onRemoveTodo={removeTodo}
      /> 
    )}

      <MotivationalQuote />

    </>
  )
}

export default App;