import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OTPVerify() {
  const [otp, setOtp] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError('');
  };

  const handleBlur = () => {
    setTouched(true);
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Add OTP verification logic here
      navigate('/homepage');
      console.log('OTP Verified:', otp);
    } else {
      setError('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white" style={{ zIndex: '1', margin: "0 20px 0 20px" }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">OTP Verification</h2>
        <p className="text-center text-gray-400">Please enter the 6-digit code sent to your email/phone</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative">
          <div className="flex mb-3 flex-col justify-center relative">
            <label htmlFor="otp" className="block text-gray-400 font-bold mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              maxLength="6"
              value={otp}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 text-center bg-gray-900 border ${touched && error ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:border-pink-500`}
            />
            {touched && error && (
              <p className="text-center text-red-500 absolute" style={{ top: '70px' }}>
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-md focus:outline-none"
          >
            Verify OTP
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-400">Didn't receive the code? <a href="/otp-verify" className="text-pink-500 hover:text-pink-600">Resend OTP</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OTPVerify;
