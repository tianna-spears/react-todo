import {useState} from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle]= useState();

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
        <form onSubmit={handleAddTodo}> 
            <label htmlFor="todoTitle"> Title </label>
            <input type="text" name="title" id="todoTitle" 
            value={todoTitle} onChange={handleTitleChange}/>
            {/* <label htmlFor="dueDate"> Due Date </label>
            <input type="date" name="title" id="dueDate" /> */}
            <button type='submit'> Add </button>
        </form>
    )
}

export default AddTodoForm;