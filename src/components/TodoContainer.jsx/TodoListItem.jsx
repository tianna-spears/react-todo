import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
 
function TodoListItem ({title, id, onRemoveTodo})  {

    return (
        <li className={styles.todolistheader} key={id}>
            <span className={styles.todotask}> {title} </span>
            <button onClick={() => onRemoveTodo(id)}> Remove </button>
        </li>
    );
}

TodoListItem.propTypes= {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onRemoveTodo: PropTypes.func.isRequired, 
  }

export default TodoListItem;