import React, { useState } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaForward, FaBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayerPopup = ({ isVisible, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add functionality here to control audio playback
  };

  const handleFastForward = () => {
    // Add functionality for fast forward
  };

  const handleRewind = () => {
    // Add functionality for rewind
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden w-11/12 sm:w-2/3 lg:w-1/3 p-6 relative">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl focus:outline-none"
          onClick={onClose}
          style={{top:"-4px", right: "4px"}}
        >
          &times;
        </button>
        <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
          <img
            src="https://www.w3schools.com/w3images/onepage_restaurant.jpg"
            alt="Album Cover"
            className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-white text-lg font-medium tracking-widest">NOW PLAYING</div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-1 text-white text-center">Song Title</h2>
        <h3 className="text-lg text-gray-400 mb-6 text-center">Artist Name</h3>
        <div className="flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4 space-x-3">
            <button className="text-gray-300 hover:text-white text-2xl focus:outline-none transition-transform transform hover:scale-110">
              <FaStepBackward />
            </button>
            <button 
              className="text-gray-300 hover:text-white text-2xl focus:outline-none transition-transform transform hover:scale-110"
              onClick={handleRewind}
            >
              <FaBackward />
            </button>
            <button
              className="text-white bg-pink-600 p-4 rounded-full hover:bg-pink-700 focus:outline-none transition-transform transform hover:scale-110"
              onClick={togglePlayPause}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button 
              className="text-gray-300 hover:text-white text-2xl focus:outline-none transition-transform transform hover:scale-110"
              onClick={handleFastForward}
            >
              <FaForward />
            </button>
            <button className="text-gray-300 hover:text-white text-2xl focus:outline-none transition-transform transform hover:scale-110">
              <FaStepForward />
            </button>
          </div>
          <div className="w-full flex items-center justify-between text-gray-300">
            <button className="text-xl hover:text-white focus:outline-none transition-transform transform hover:scale-110">
              <FaVolumeMute />
            </button>
            <div className="flex-1 mx-3">
              <input 
                type="range" 
                className="w-full h-2 bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500" 
              />
            </div>
            <button className="text-xl hover:text-white focus:outline-none transition-transform transform hover:scale-110">
              <FaVolumeUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerPopup;
