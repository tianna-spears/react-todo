import React from 'react';

const AddTodoForm = () => {
    const handleAddTodo = (event) => {
        const todoTitle= event.target.title.value;
        console.log(todoTitle);
        event.preventDefault();
        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}> 
            <label htmlFor="todoTitle"> Title </label>
            <input type="text" name="title" id="todoTitle" />
            <button type='submit'> Add </button>
        </form>
    )
}

export default AddTodoForm;