const net = require('net');
const client = new net.Socket();
client.connect(9999, '127.0.0.1', () => {
console.log(" Connected to Add RPC Server.");
const request = {
functionName: "add",
args: [10, 5]
};
client.write(JSON.stringify(request));
});
client.on('data', (data) => {
const res = JSON.parse(data.toString());
console.log(" Response:", res);
client.end();
});
client.on('end', () => console.log(" Disconnected from server."));