import React, {useState} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
  JSON.parse(localStorage.getItem(key)) || initialState
);

React.useEffect(() => {
  localStorage.setItem('savedTodoList', JSON.stringify(value));
}, [value, key]);

return [value, setValue];
};

function App() {
  const [todoList, setTodoList] = useStorageState('savedTodoList', []);

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