import React, { useState } from 'react';
import "./custome-scrollbar.css";
import MusicPlayerPopup from './MusicPlayerPopup';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HomePage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleMusicPlayerClick = () => {
      setPopupVisible(true);
    };
  
    const handleClosePopup = () => {
      setPopupVisible(false);
    };
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white"style={{width:"100%", zIndex:'1', paddingTop: "84px"}}>
      {/* Main Content */}
      <header className="fixed top-0 left-0 right-0 z-10 p-6 flex justify-between items-center bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg">
            <h1 className="text-3xl font-bold">Melodyverse</h1>
            <nav>
                <ul className="hidden md:flex space-x-6">
                <li><a href="/homepage" className="hover:text-pink-500">Home</a></li>
                <li><a href="/homepage" className="hover:text-pink-500">Explore</a></li>
                <li><a href="/homepage" className="hover:text-pink-500">Library</a></li>
                <li><a href="/homepage" className="hover:text-pink-500">Premium</a></li>
                </ul>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
                <a href="/homepage" className="hover:text-pink-500">Profile</a>
                <Link to="/login" className="hover:text-pink-500">Logout</Link>
            </div>
            <div className="md:hidden">
                <FaBars size={24} className="cursor-pointer" onClick={toggleMenu} />
            </div>
        </header>


      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
          <FaTimes size={24} className="absolute top-6 right-6 cursor-pointer" onClick={toggleMenu} />
          <ul className="flex flex-col space-y-6 text-center">
            <li><a href="/homepage" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Home</a></li>
            <li><a href="/homepage" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Explore</a></li>
            <li><a href="/homepage" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Library</a></li>
            <li><a href="homepage" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Premium</a></li>
            <li><a href="/homepage" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Profile</a></li>
            <li><a href="/login" className="hover:text-pink-500 text-2xl" onClick={toggleMenu}>Logout</a></li>
          </ul>
        </div>
      )}

      <main className="p-6">
        <section className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold mb-6">Welcome to Melodyverse</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">Dive into an endless world of music, discover new artists, and create your perfect playlist.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Playlist Cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition">
                <img src="https://www.w3schools.com/w3images/nature.jpg" alt="Playlist" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-semibold">Playlist {index + 1}</h4>
                <p className="text-sm text-gray-400">Description for Playlist {index + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className="mb-12">
          <h3 className="text-4xl font-bold mb-6">Recommended for You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Recommended Cards */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition">
                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Recommended" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-semibold">Recommendation {index + 1}</h4>
                <p className="text-sm text-gray-400">Description for Recommendation {index + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New Releases Section */}
        <section className="mb-12">
          <h3 className="text-4xl font-bold mb-6">New Releases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* New Releases Cards */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition">
                <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="New Release" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-xl font-semibold">New Release {index + 1}</h4>
                <p className="text-sm text-gray-400">Description for New Release {index + 1}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-center">
        <p className="text-gray-400">© 2024 Melodyverse. All rights reserved.</p>
      </footer>

      {/* Music Player */}
      <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer" style={{width:"360px", gap:"50px"}}  onClick={handleMusicPlayerClick}>
        <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="Album Cover" className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <h4 className="text-lg font-semibold">Song Title</h4>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
        <button className="ml-auto p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
          {/* Add icon for play/pause */}
          ▶️
        </button>
      </div>
      {/* Music Player Popup */}
      <MusicPlayerPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
    </div>
  );
}

export default HomePage;
