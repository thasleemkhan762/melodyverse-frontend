import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      // Add signup logic here
      navigate('/login');
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg" style={{zIndex:"1", margin: "0 20px 0 20px"}}>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Sign Up for MelodyVerse</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          required={true}
          errorMessage="Please enter a valid username."
        />
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
        <div className="relative">
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required={true}
            errorMessage="Passwords must match."
            pattern={values.password}
          />
        </div>
        <button className="w-full mt-6 p-2 text-white font-semibold rounded-md bg-pink-500 hover:bg-pink-600">
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500">
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Signup;
