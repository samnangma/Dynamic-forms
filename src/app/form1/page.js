"use client";

import { useState } from 'react';

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      {schema.fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;