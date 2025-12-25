//Write a program to simulate two processes requesting access to a shared resource by printing messages like “Process 1 requesting resource.”

// request_lock.js - Simulated mutual exclusion with a lock variable
let lock = false; // false = free, true = held
function requestResource(processName, delayMs) {
setTimeout(() => {
console.log(`${processName} is requesting access to the shared resource...`);
if (!lock) {
// acquire lock
lock = true;
console.log(`${processName} acquired the resource.`);
// simulate using the resource for some time
setTimeout(() => {
console.log(`${processName} released the resource.`);
lock = false;
}, 1000); // holds resource for 1 second
} else {
console.log(`${processName} found resource busy and will wait/retry.`);
// simple retry after some time
setTimeout(() => requestResource(processName, 0), 500);
}
}, delayMs);
}
// Start two processes with slightly different request times
requestResource("Process 1", 0);
requestResource("Process 2", 100);