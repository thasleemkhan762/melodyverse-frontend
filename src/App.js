import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import ForgotPassword from './components/ForgetPassword';
import OTPVerify from './components/OtpVerify';
function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-black" >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/forget-page" element={<ForgotPassword />} />
          <Route path="/otp-verify" element={<OTPVerify />} />
        </Routes>
        <div className="squareleft"></div>
        <div className="squareright"></div>
      </div>
    </Router>
  );
}

export default App;
