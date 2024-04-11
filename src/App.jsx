import React, {useState, useEffect} from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import MotivationalQuote from './MotivationalQuote.jsx';

function useSemiPersistentState (key, initialState) {
    const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  
  return [value, setValue];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

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

      <TodoList todoList={todoList} 
      onRemoveTodo={removeTodo}
      /> 

      <MotivationalQuote />

    </>
  );
}

export default App;