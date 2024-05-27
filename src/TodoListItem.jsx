import React from 'react';
import style from './TodoListItem.module.css'
 
function TodoListItem ({title, id, onRemoveTodo})  {
    return (
        <li className={style.ListItem} key={id}>
            <span> {title} </span>
            <button onClick={() => onRemoveTodo(id)}> Remove </button>
        </li>
    );
}

export default TodoListItem;