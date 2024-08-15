// src/App.js
import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePeer from './components/CreatePeer';
import ConnectPeer from './components/ConnectPeer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreatePeer />} />
        <Route path="/connect" element={<ConnectPeer />} />
      </Routes>
    </Router>
  );
};

export default App;
