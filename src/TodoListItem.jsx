import React from 'react';

function TodoListItem ({title, id, onRemoveTodo})  {
    return (
        <li key={id}>
            <span> {title} </span>
            <button onClick={() => onRemoveTodo(id)}> Remove </button>
        </li>
    );
}

export default TodoListItem;