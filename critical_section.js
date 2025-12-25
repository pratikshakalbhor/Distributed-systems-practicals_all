//Write a program to simulate a critical section using a lock variable by using a Boolean value such as lock = false to allow or block access.

let lock = false; // false means the resource is free
function enterCriticalSection(processName) {
console.log(processName + " is requesting access...");
if (!lock) {
lock = true; // acquire the lock
console.log(processName + " has entered the critical section.");

// Simulate work inside the critical section
setTimeout(() => {
console.log(processName + " is leaving the critical section.");
lock = false; // release the lock
}, 1000);
} else {
console.log(processName + " cannot enter (resource is locked).");
}
}
// Simulate two processes trying to enter the critical section

enterCriticalSection("Process 1");
setTimeout(() => enterCriticalSection("Process 2"), 200);