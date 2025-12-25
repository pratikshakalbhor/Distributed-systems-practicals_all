// Write a program to simulate replication of a key-value store by copying one dictionary to another dictionary using methods like dict.copy() or {...object}.  



// Original store
let original = {
  name: "Pratiksha",
  subject: "Distributed Systems",
  marks: 95
};

console.log("Original Store:", original);

// Replicate using spread operator
let replica = { ...original };
console.log("Replica Store:", replica);

// Update original
original.marks = 90;

// Display after update
console.log("\nAfter updating original:");
console.log("Original Store:", original);
console.log("Replica Store:", replica);