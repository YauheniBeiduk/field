import React from 'react';
import './App.css';
import DynamicForm from "./dynamicForm/DynamicForm";

function App() {
    type FieldConfig = {
        id: string;
        type: 'inputText' | 'inputEmail' | 'inputPassword';
        label: string;
        defaultValue?: string;
        required?: boolean;
    };

    const fields: FieldConfig[] = [
        {
            id: 'first_name',
            type: 'inputText',
            label: 'First Name',
            defaultValue: 'Some first name',
        },
        {
            id: 'last_name',
            type: 'inputText',
            label: 'Last Name',
        },
        {
            id: 'email',
            type: 'inputEmail',
            label: 'Email',
            required: true,
        },
        {
            id: 'password',
            type: 'inputPassword',
            label: 'Password',
            required: true,
        },
    ];

    const handleSubmit = (formData: any) => {
        console.log(formData);
    };

  return (
    <div className="container-app">
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
