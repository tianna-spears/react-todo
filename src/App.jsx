import React, {useState} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

function App() {
    const [newTodo, setNewTodo]= useState('');
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (todoTitle) => {
      const newTodoItem = {
        title: todoTitle,
      }

      setTodoList([todoList, newTodoItem]);
      setNewTodo(todoTitle);
    };

  return (
    <div>
      <h1>Todo List!</h1>
      
      <AddTodoForm onAddTodo={handleAddTodo}/> 
            <p> {newTodo} </p>


      <TodoList todoList={todoList} />
      <MotivationalQuote />

    </div>
  );
}

export default App; 