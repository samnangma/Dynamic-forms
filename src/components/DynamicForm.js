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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {schema.fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block font-medium mb-2">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleInputChange}
              className="border rounded py-2 px-3 w-full"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
