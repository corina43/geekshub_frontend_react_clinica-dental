import React from 'react';
import './InputText.css';
 
export const InputText = ({
    type, 
    name, 
    placeholder, 
    required,
    validateFunction,
    changeFunction, 
}) => {
     return (
         <>
            <input 
                className='inputDesign'
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onBlur={(e) => validateFunction(e)}  
                onChange = {(e) => changeFunction(e) }  
            />
         </>
     )
}