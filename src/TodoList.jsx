import * as React from 'react';
import TodoListItem from './TodoListItem.jsx';
  
  function TodoList ({todoList}) {
    return (
      <ul>
        {todoList.map((item) => {
          return ( 
            < TodoListItem 
            title={item.title} id={item.id}
            // due_date={item.due_date} 
            // key={item.task_ID}
            />
                )
        })}
      </ul>
    )
}

export default TodoList;