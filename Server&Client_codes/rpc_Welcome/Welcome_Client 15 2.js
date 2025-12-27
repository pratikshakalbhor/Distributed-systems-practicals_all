// client.js
// Simple TCP client that connects to the server

const net = require('net');

// Create a TCP client socket
const client = new net.Socket();

// Connect to the server
client.connect(5000, '127.0.0.1', () => {
  console.log("Client connected to server.");
});

// Optional: close connection
client.on('close', () => {
  console.log("Connection closed.");
});
