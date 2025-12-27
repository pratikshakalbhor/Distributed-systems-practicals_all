// rpc_client.js
const net = require('net');

// Create client
const client = new net.Socket();

client.connect(6000, '127.0.0.1', () => {
  console.log("Connected to RPC Server.");

  // Example: marks = 45 out of 50
  const request = {
    marks: 45,
    total: 50
  };

  client.write(JSON.stringify(request));
});

// Receive response
client.on('data', (data) => {
  const response = JSON.parse(data.toString());
  console.log("Percentage =", response.result);
  client.end();
});

client.on('end', () => {
  console.log("Disconnected from server.");
});
