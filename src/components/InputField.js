import React from 'react';

function InputField(props) {
    const {placeholder, type, handleChange, value} = props

    return (
        <input className="form-control" value={value} type={type} placeholder={placeholder} onChange={handleChange}/>
    );
}

export default InputField;