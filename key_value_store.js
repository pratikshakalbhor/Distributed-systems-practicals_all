//Write a program to store key-value pairs using a dictionary or map by implementing basic put and get operations.

// key value pair
//using map
//put & get operation
// Create an empty Map to store key-value pairs
let myMap = new Map();

// Function to add a key-value pair (PUT operation)
function put(key, value) {
myMap.set(key, value);
console.log(`Added: ${key} → ${value}`);
}
// Function to get a value using a key (GET operation)
function get(key) {
if (myMap.has(key)) {
console.log(`Value for '${key}' is: ${myMap.get(key)}`);
} else {
console.log(`Key '${key}' not found.`);
}
}
// Example usage
put("name", "Pratiksha");
put("subject", "Distributed Systems");
put("marks", 95);
get("name");
get("marks");
get("age"); // Key not found example