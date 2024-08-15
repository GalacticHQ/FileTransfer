// src/components/ConnectPeer.js
import React, { useState } from 'react';
import Peer from 'peerjs';
import './ConnectPeer.css'; // Import custom CSS for styling

const ConnectPeer = () => {
  const [peer] = useState(new Peer());
  const [peerIdToConnect, setPeerIdToConnect] = useState('');

  const connectToPeer = () => {
    const connection = peer.connect(peerIdToConnect);

    connection.on('open', () => {
      // Optionally handle connection opened
    });

    connection.on('data', (data) => {
      if (data.type === 'file') {
        const blob = new Blob([data.data]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = data.filename;
        a.click();
      }
    });
  };

  return (
    <div className="container">
      <h2 className="title">Connect to a Peer</h2>
      <input
        type="text"
        placeholder="Enter Peer ID"
        value={peerIdToConnect}
        onChange={(e) => setPeerIdToConnect(e.target.value)}
        className="input"
      />
      <button onClick={connectToPeer} className="button">
        Connect
      </button>
    </div>
  );
};

export default ConnectPeer;
