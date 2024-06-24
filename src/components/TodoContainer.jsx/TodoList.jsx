import * as React from 'react';
import TodoListItem from './TodoListItem.jsx';
import PropTypes from 'prop-types';
  
function TodoList ({ todoList, onRemoveTodo }) {

    return (
      <ul>
        {todoList.map((item) => (
            < TodoListItem
            key={item.id}
            title={item.title}
            id={item.id} 
            onRemoveTodo={onRemoveTodo}
            />
          ))}
      </ul>
    );
}

TodoList.propTypes= {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired, 
}

export default TodoList;