import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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

InputWithLabel.propTypes= {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isFocused: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default InputWithLabel;