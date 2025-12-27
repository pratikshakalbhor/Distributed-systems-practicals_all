/*1. Write a program to print “Hello Server” from the client side by sending the text through a  simple function call or by using a basic socket.write() method. */



// Import the net module
const net = require('net');

// Create a new socket object
const client = new net.Socket();

// Connect to server
client.connect(9999, '127.0.0.1', () => {
  console.log("Connected to server!");

  // Send message to server
  client.write("Hello Server, this is Client!");
});

// Receive data from server
client.on('data', (data) => {
  console.log("Message from server:", data.toString());

  // Close connection after receiving reply
  client.end();
});

// Handle connection end
client.on('end', () => {
  console.log(" Disconnected from server.");
});