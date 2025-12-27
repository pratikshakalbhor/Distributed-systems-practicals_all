// server.js
// Simple TCP server that prints "Welcome Client" when a client connects

const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log("Welcome Client");

  // Optional: handle disconnect
  socket.on('end', () => {
    console.log("Client disconnected.");
  });
});

// Server listens on port 5000
server.listen(5000, '127.0.0.1', () => {
  console.log("Server running on 127.0.0.1:5000");
});
