import React, { ChangeEvent } from "react";
import './style.scss';

type InputProps = {
    id: string;
    value: string;
    handleChange:  (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
};


const Input = ({ value, id, handleChange, type } : InputProps) =>
    <input
        placeholder='Enter value'
        className='field'
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
    />;

export default Input;