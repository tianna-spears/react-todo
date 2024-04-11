import React from 'react';

const InputWithLabel = ({ id, value, onChange, children }) => (
    <>
    <label htmlFor={id}>{children}</label>
    <input 
    id= {id} 
    type="text" 
    value={value} 
    onChange={onChange} />
    </>
)

export default InputWithLabel;