// rpc_client.js
const net = require('net');

// Create client
const client = new net.Socket();

// Connect to RPC server
client.connect(5000, '127.0.0.1', () => {
  console.log("Connected to RPC Server.");

  // Prepare request
  const request = { a: 10, b: 20, c: 30 };

  // Send request
  client.write(JSON.stringify(request));
});

// Receive average from server
client.on('data', (data) => {
  const response = JSON.parse(data.toString());
  console.log("Average =", response.result);
  client.end();
});

// On disconnect
client.on('end', () => {
  console.log("Disconnected from server.");
});
