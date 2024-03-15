import React from 'react';

function TodoListItem (props) {
    return (
        <li>
            <span> {props.todo} </span>
            <span> {'by'} {props.todo} </span>
        </li> 
    )
}

export default TodoListItem;