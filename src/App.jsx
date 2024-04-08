import React, {useState} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

function useSemiPersistentState (key, initialState) {
    const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );
  
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(value));
  }, [value, key]);
  
  return [value, setValue];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo]) 
    }

  return (
    <>
      <h1>Todo List!</h1>
      
      <AddTodoForm onAddTodo={addTodo} /> 
      <TodoList todoList={todoList} />
      <MotivationalQuote />

    </>
  );
}

export default App;