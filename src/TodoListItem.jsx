import React from 'react';

function TodoListItem (props) {
    return (
        <li>
            <span> {props.item.title} </span>
            <span> {'by'} {props.item.due_date} </span>
        </li> 
    )
}

export default TodoListItem;