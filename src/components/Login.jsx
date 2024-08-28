import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login to MelodyVerse</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required={true}
          errorMessage="Please enter a valid email address."
        />
        <div className="relative">
          <FormInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={values.password}
            onChange={handleChange}
            required={true}
            errorMessage="Password should be at least 6 characters long."
            pattern=".{6,}"
          />
          <span
            className="absolute right-3 top-9 text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button className="w-full mt-6 p-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500">
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
