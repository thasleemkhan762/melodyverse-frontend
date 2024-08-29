import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Melodyverse</h1>
        <p className="text-lg mb-8">Discover, stream, and share a constantly expanding mix of music.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup">
            <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center pb-6">
        <p className="text-sm">© 2024 Melodyverse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LandingPage;
