import {useState} from 'react';
import InputWithLabel from './InputWithLabel.jsx';
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle]= useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    } 
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle,id: Date.now()});
        console.log(todoTitle);
        setTodoTitle('');
    }

    return (
        <>
        <form onSubmit={handleAddTodo}>

        <InputWithLabel 
        id= "title"
        value= {todoTitle}
        onChange={handleTitleChange}
        isFocused={true}
        >
        <strong> Title </strong> 
        </InputWithLabel>

        <button type='submit'> <strong> Add </strong> </button> 
        </form>
        </>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}

export default AddTodoForm;