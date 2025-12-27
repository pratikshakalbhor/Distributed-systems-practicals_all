// rpc_server.js
const net = require('net');

// RPC function: average of 3 numbers
function rpc_avg(a, b, c) {
  return (a + b + c) / 3;
}

// Create RPC server
const server = net.createServer((socket) => {
  console.log("Client connected.");

  socket.on('data', (data) => {
    const request = JSON.parse(data.toString());

    // Extract values from client
    const { a, b, c } = request;

    // Call RPC function
    const result = rpc_avg(a, b, c);

    // Send result back as JSON
    const response = { result };
    socket.write(JSON.stringify(response));
  });

  socket.on('end', () => {
    console.log("Client disconnected.");
  });
});

server.listen(5000, () => {
  console.log("RPC Server running on port 5000");
});
