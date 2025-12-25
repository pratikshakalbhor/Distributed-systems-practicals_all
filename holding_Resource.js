//Write a program to simulate two processes each holding one resource by printing statements such as “P1 holds R1” and “P2 holds R2.”

// each holding resource
// p1 hold cpu
// p2 hold ram
// Function for a process to hold a specific resource
function holdResource(process, resource) {
console.log(`${process} holds ${resource}`);
}
// Function to simulate two processes holding different resources
function simulateProcesses() {
// Process 1 holds Resource A

holdResource("P1", "Printer");
// Process 2 holds Resource B
holdResource("P2", "Scanner");
console.log("Both processes are holding their respective resources.");
}
// ---- Program Execution ----
simulateProcesses();