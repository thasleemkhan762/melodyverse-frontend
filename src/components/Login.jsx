import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/homepage');
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg" style={{zIndex:"1", margin: "0 20px 0 20px"}}>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Login to MelodyVerse</h2>
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

        <div className="flex justify-between items-center mt-4">
        <label className="flex items-center text-gray-600">
            <input
              type="checkbox"
              name="rememberMe"
              checked={values.rememberMe}
              onChange={handleChange}
              className="form-checkbox text-indigo-600"
            />
            <span className="ml-2 text-gray-400">Remember Me</span>
          </label>
          <Link to="/forget-page" className="text-sm text-pink-500 hover:underline"  >
            Forgot Password?
          </Link>
        </div>
        
        <button className="w-full mt-6 p-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600">
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500">
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="text-pink-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
     
    </div>
  );
};

export default Login;
