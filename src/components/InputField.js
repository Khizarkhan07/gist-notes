import React, {forwardRef} from 'react';

function InputField(props, ref) {
    const {placeholder, type, handleChange, value} = props

    return (
        <input className="form-control" ref={ref} value={value} type={type} placeholder={placeholder} onChange={handleChange}/>
    );
}

export default forwardRef(InputField);