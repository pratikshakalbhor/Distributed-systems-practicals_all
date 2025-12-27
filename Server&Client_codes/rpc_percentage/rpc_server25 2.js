// rpc_server.js
const net = require('net');

// RPC function to calculate percentage
function rpc_percentage(marks, total) {
  return (marks / total) * 100;
}

// Create RPC Server
const server = net.createServer((socket) => {
  console.log("Client connected.");

  socket.on('data', (data) => {
    const request = JSON.parse(data.toString());

    const { marks, total } = request;

    const result = rpc_percentage(marks, total);

    // Send result
    socket.write(JSON.stringify({ result }));
  });

  socket.on('end', () => {
    console.log("Client disconnected.");
  });
});

server.listen(6000, () => {
  console.log("RPC Server running on port 6000...");
});
