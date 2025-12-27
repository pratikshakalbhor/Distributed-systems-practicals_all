
const net = require('net');
const client = new net.Socket();

client.connect(9997, '127.0.0.1', () => {
console.log(" Connected to Multiply RPC Server.");
const request = {
functionName: "multiply",
args: [6, 8]
};
client.write(JSON.stringify(request));
});

client.on('data', (data) => {

console.log(" Response:", JSON.parse(data.toString()));
client.end();
});