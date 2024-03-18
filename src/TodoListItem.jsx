import React from 'react';

function TodoListItem (props)  {
    return (
        <li key={props}>
            <span> {props.title} </span>
            <span> {'by'} {props.due_date} </span>
        </li>
    );
}

export default TodoListItem;