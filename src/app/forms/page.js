'use client';

import { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleFieldChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      {fields.map((field, index) => (
        <input
          key={index}
          type="text"
          value={field.value}
          onChange={(event) => handleFieldChange(index, event)}
          className="dynamic-form__input"
        />
      ))}
      <div className="dynamic-form__buttons">
        <button type="button" onClick={handleAddField} className="dynamic-form__button">
          Add Field
        </button>
        <button type="submit" className="dynamic-form__button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default DynamicForm;