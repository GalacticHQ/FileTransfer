// src/components/DynamicIsland.js
import React from 'react';

const DynamicIsland = ({ show, message }) => {
  return (
    <div
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2">
        {message && (
          <>
            <span className="text-green-500 animate-pulse">{message}</span>
            {message === 'File transfer successful' && (
              <img
                src="https://images-ext-1.discordapp.net/external/0Yf3SMFZmlY2hmBnl21TN3HbnKNYACass8TdL0mSTAk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1057994591984435270/a_6578d3b1322a272aeb894f38464c38bd.gif?width=663&height=663"
                alt="Notification"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicIsland;
