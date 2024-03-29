import React, {useState} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo]) 
    }

  return (
    <div>
      <h1>Todo List!</h1>
      
      <AddTodoForm onAddTodo={addTodo} /> 
      <TodoList todoList={todoList} />
      <MotivationalQuote />

    </div>
  );
}

export default App; 