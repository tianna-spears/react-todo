import React from 'react';

function TodoListItem (props)  {
    return (
        <li key={props.key}>
            <span> {props.title} </span>
            <span> {'by'} {props.due_date} </span>
        </li>
    );
}

export default TodoListItem;