// ----------------------
// Berkeley Clock Synchronization Simulation
// ----------------------

// Step 1: Simulated clocks (in milliseconds difference)
let clocks = {
  master: 10000,  // master is 10 seconds ahead
  client1: 8000,  // client1 is 8 seconds ahead
  client2: 12000, // client2 is 12 seconds ahead
  client3: 9500   // client3 is 9.5 seconds ahead
};

// Function to print current times
function showClocks(stage) {

  console.log(`\n🕒 ${stage}`);
  for (const [name, time] of Object.entries(clocks)) {
    console.log(`${name}: ${time} ms`);
  }
}

// Step 2: Master requests time from clients
showClocks("Initial Clock Times");

// Master collects all times (including its own)
const times = Object.values(clocks);

// Step 3: Master calculates average
const avgTime =
  times.reduce((sum, val) => sum + val, 0) / times.length;

console.log(`\n📊 Average Time (calculated by Master): ${avgTime} ms`);

// Step 4: Master computes adjustment for each node
const adjustments = {};
for (const [name, time] of Object.entries(clocks)) {
  adjustments[name] = avgTime - time;
}

// Step 5: Master sends adjustments, and all nodes update their clocks
for (const [name, adjust] of Object.entries(adjustments)) {
  clocks[name] += adjust;
}

// Step 6: Show updated synchronized times
showClocks("After Synchronization (All Clocks Adjusted)"); 
