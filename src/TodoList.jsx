import * as React from 'react';
import TodoListItem from './TodoListItem.jsx';
  
  function TodoList ({ todoList, onRemoveTodo }) {
    return (
      <ul>
        {todoList.map((item) => (
            < TodoListItem
            key={item.id}
            title={item.title} 
            id={item.id} 
            onRemoveTodo={onRemoveTodo}
            />
          ))}
      </ul>
    );
}

export default TodoList;