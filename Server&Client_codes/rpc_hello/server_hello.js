// Import the net module
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log(" Client connected!");

  // When data is received from the client
  socket.on('data', (data) => {
    console.log("Message from client:", data.toString());

    // Send response back to client
    socket.write("Hello Client! Message received.");
  });

  // When the client disconnects
  socket.on('end', () => {
     console.log(" Client disconnected.");
  });
});

// Server listens on port 9999
server.listen(9999, '127.0.0.1', () => {
  console.log(" Server is running on 127.0.0.1:9999");
});