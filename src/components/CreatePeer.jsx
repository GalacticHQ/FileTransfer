// src/components/CreatePeer.js
import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import './CreatePeer.css'; // Import custom CSS for styling

const CreatePeer = () => {
  const [peer, setPeer] = useState(null);
  const [peerId, setPeerId] = useState('');
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const newPeer = new Peer();
    setPeer(newPeer);

    newPeer.on('open', (id) => {
      setPeerId(id);
    });

    newPeer.on('connection', (conn) => {
      setConnection(conn);

      conn.on('data', (data) => {
        if (data.type === 'file') {
          const blob = new Blob([data.data]);
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = data.filename;
          a.click();
        }
      });
    });

    return () => {
      newPeer.destroy(); // Clean up on unmount
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (connection) {
        connection.send({ type: 'file', filename: file.name, data: reader.result });
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container">
      <h2 className="title">Create a Connection</h2>
      <p className="peer-id">Your Peer ID: {peerId}</p>
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input"
      />
    </div>
  );
};

export default CreatePeer;
