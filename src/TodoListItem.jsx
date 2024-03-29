import React from 'react';

function TodoListItem ({title, id})  {
    return (
        <li key={id}>
            <span> {title} </span>
            {/* <span> {props.due_date} </span> */}
        </li>
    );
}

export default TodoListItem;