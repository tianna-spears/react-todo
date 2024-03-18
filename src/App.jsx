import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote';
import TodoListItem from './TodoListItem.jsx';

function App() {
  return (
    <div>
      <h1>Todo List!</h1>
      
      <AddTodoForm /> 
      <TodoList />
      <MotivationalQuote />

    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
    }
  
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default App; 