import React, { useEffect, useRef } from 'react';

const InputWithLabel = ({ 
    id, 
    value, 
    type = 'text',
    onChange,
    isFocused, 
    children,
}) => {
    const inputRef= useRef();
    
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    });

    console.log(value);

return (
    <>
    <label htmlFor={id}>{children}</label>
    <input 
    ref={inputRef}
    id={id}
    type= {type}
    value={value}
    onChange={onChange} 
    />
   </>
  );
};

export default InputWithLabel;