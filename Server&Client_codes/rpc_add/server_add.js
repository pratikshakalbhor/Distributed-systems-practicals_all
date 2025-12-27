//Write a program to simulate RPC for addition of two numbers by creating a function such as rpc_add(a, b) that returns the sum.

const net = require('net');
// RPC function
function add(a, b) {
return a + b;
}
const functions = { add };
const server = net.createServer((socket) => {
console.log(" Client connected.");
socket.on('data', (data) => {
try {
const request = JSON.parse(data.toString());
const { functionName, args } = request;
console.log(" Request received:", request);
if (functions[functionName]) {
const result = functions[functionName](...args);
socket.write(JSON.stringify({ status: "success", result }));
} else {
socket.write(JSON.stringify({ status: "error", message: "Function not found" }));
}

} catch (error) {
socket.write(JSON.stringify({ status: "error", message: "Invalid request format" }));
}
});
socket.on('end', () => console.log(" Client disconnected."));
});
server.listen(9999, '127.0.0.1', () =>
console.log(" RPC Add Server running on 127.0.0.1:9999")
);