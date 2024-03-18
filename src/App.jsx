import React, {useState} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

function App() {
    const [newTodo, setNewTodo]= React.useState('');
    const handleAddTodo = (todoTitle) => {
      setNewTodo(todoTitle);
    };

  return (
    <div>
      <h1>Todo List!</h1>
      
      <AddTodoForm onAddTodo={setNewTodo}/> 
            <p> {newTodo} </p>


      <TodoList />
      <MotivationalQuote />

    </div>
  );
}

export default App; 