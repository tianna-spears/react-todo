import React from 'react';

function TodoListItem ()  {
    return (
        <li>
        <span> {item.title} </span>
        <span> {'by'} {item.due_date} </span>
          </li>
    );
}

export default TodoListItem;