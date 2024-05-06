import React, {useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

const key = 'savedTodoList';

const initialState = [];

const getAsyncList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newTodoList= (JSON.parse(localStorage.getItem(key)) || initialState);
      resolve({ data: {todoList: newTodoList}});
      }, 2000);
    });
  };

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getAsyncList().then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
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