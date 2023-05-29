import React, { useState, ChangeEvent } from 'react';
import './style.scss';
import SubmitButton from "../submitButton/SubmitButton";
import Input from "../Input/Input";

type FieldConfig = {
    id: string;
    type: 'inputText' | 'inputEmail' | 'inputPassword';
    label: string;
    defaultValue?: string;
    required?: boolean;
};

type FieldData = {
    [key: string]: string;
};

type DynamicFormProps = {
    fields: FieldConfig[];
    onSubmit: (data: FieldData) => void;
};

const DynamicForm = ({ fields, onSubmit } : DynamicFormProps) => {
    const [formData, setFormData] = useState<FieldData>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
    };

    const isSubmitButtonVisible = fields.every(
        (field) => !field.required || formData[field.id]
    );

    return (
        <div className='main-wrapper'>
            {fields.map((field) => (
                <div className='field-container' key={field.id}>
                    <label className='label' htmlFor={field.id}>{field.label}</label>
                    {field.type === 'inputText' && (
                        <Input type="text" id={field.id} value={formData[field.id] || field.defaultValue || ''} handleChange={handleChange} />
                    )}
                    {field.type === 'inputEmail' && (
                        <Input type="email" id={field.id} value={formData[field.id] || field.defaultValue || ''} handleChange={handleChange} />
                    )}
                    {field.type === 'inputPassword' && (
                        <Input type="password" id={field.id} value={formData[field.id] || field.defaultValue || ''} handleChange={handleChange} />
                    )}
                </div>
            ))}
            <SubmitButton handleSubmit={handleSubmit} isSubmitButtonVisible={isSubmitButtonVisible} />
        </div>
    );
};

export default DynamicForm;
