// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">P2P File Sharing</h1>
        <div>
          <Link to="/" className="text-white px-4">
            Create Connection
          </Link>
          <Link to="/connect" className="text-white px-4">
            Connect to Peer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
