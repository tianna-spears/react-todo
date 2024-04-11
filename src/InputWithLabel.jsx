import React from 'react';

const InputWithLabel = ({ id, name, value, onChange }) => (
    <>
    <label htmlFor={id}>{name}</label>
    <input 
    id= {id} 
    name="title" 
    type="text" 
    value={value} 
    onChange={onChange} />
    </>
)

export default InputWithLabel;