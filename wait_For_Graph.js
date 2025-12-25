//Write a program to represent a wait-for graph using arrays where each array entry shows which process is waiting for which resource.

const { access } = require("fs");
// Function to create a wait-for graph


function createWaitForGraph() {
// Each entry represents which process is waiting for which resource
let waitForGraph = [
{ process: "P1", waitingFor: "Printer" , holdResource:"Scanner"},
{ process: "P2", waitingFor: "Scanner" ,holdResource:"printer"},
{ process: "P3", waitingFor: "Disk" , holdResource:"Network"},
{ process: "P4", waitingFor: "Network", holdResource:"Disk" }
];
return waitForGraph;
}

// Function to display the wait-for graph
function displayWaitForGraph(graph) {
console.log("Wait-For Graph Representation:");
for(let entry of graph) {
console.log(`${entry.process} is holding ${entry.holdResource} waiting for
${entry.waitingFor}`);
}
}
// ---- Program Execution ----
let graph = createWaitForGraph();

displayWaitForGraph(graph);