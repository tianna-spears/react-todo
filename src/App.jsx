import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote';

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

export default App;