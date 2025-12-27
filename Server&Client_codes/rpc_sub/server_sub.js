//Write a program to simulate RPC for subtraction using a function like rpc_sub(a, b)that returns the result.

const net = require('net');
function subtract(a, b) {
return a - b;
}
const functions = { subtract };
const server = net.createServer((socket) => {
console.log(" Client connected.");
socket.on('data', (data) => {
try {
const request = JSON.parse(data.toString());
const result = functions[request.functionName](...request.args);
socket.write(JSON.stringify({ status: "success", result }));
} catch {
socket.write(JSON.stringify({ status: "error", message: "Invalid request" }));
}
});
socket.on('end', () => console.log(" Client disconnected."));
});
server.listen(9998, '127.0.0.1', () =>
console.log(" RPC Sub Server running on 127.0.0.1:9998")


);