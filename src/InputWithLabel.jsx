import React from 'react';

const InputWithLabel = ({ 
    id, 
    value, 
    type = 'text',
    onChange,
    isFocused, 
    children,
}) => {
    const inputRef= React.useRef();
    
    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

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