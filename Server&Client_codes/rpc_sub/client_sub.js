const net = require('net');
const client = new net.Socket();
client.connect(9998, '127.0.0.1', () => {
console.log(" Connected to Subtraction RPC Server.");
const request = {
functionName: "subtract",
args: [20, 7]
};
client.write(JSON.stringify(request));
});

client.on('data', (data) => {
console.log(" Response:", JSON.parse(data.toString()));
client.end();
});
client.on('end', () => console.log(" Disconnected."));