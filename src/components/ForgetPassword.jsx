import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (touched && !validateEmail(e.target.value)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!email) {
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || error) {
      setTouched(true);
      setError('Please enter a valid email address.');
      return;
    }
    // Add forgot password logic here
    navigate('/otp-verify');
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg relative" style={{ zIndex: '1', margin: "0 20px 0 20px" }}>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 relative">
          <label htmlFor="email" className="block text-gray-400 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-600'} bg-gray-900 text-white rounded-md focus:outline-none focus:border-pink-500`}
          />
          {touched && error && (
            <p className="absolute text-red-500 text-sm mt-1" style={{ top: '70px' }}>
              {error}
            </p>
          )}
        </div>
        <button className="w-full mt-4 p-2 text-white font-semibold rounded-md bg-pink-500 hover:bg-pink-600">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
