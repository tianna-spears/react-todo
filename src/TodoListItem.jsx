import React from 'react';
import styles from './TodoListItem.module.css'
 
function TodoListItem ({title, id, onRemoveTodo})  {
    return (
        <li className={styles.todolistheader} key={id}>
            <span className={styles.todotask}> {title} </span>
            <button onClick={() => onRemoveTodo(id)}> Remove </button>
        </li>
    );
}

export default TodoListItem;