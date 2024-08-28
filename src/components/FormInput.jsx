import React, { useState } from 'react';

const FormInput = ({ label, type, name, value, onChange, errorMessage, required, pattern }) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    setTouched(true);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        className={`mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
          touched && !value ? 'border-red-500' : ''
        }`}
      />
      {touched && !value && (
        <span className="text-red-500 text-xs absolute top-full left-0 mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
