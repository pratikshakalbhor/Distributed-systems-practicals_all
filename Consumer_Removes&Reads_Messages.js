// Write a program where a consumer removes and reads messages one by one from the queue by using operations like pop(0) or shift().

// Create a queue (list) with some messages
let messageQueue = ["Message 1", "Message 2", "Message 3", "Message 4"];

// Function to display current queue
function displayQueue() {
  console.log("Current Queue:", messageQueue);
}

// Function for consumer to read and remove messages one by one
function consumeMessages() {
  console.log("Consumer is reading messages...");
  while (messageQueue.length > 0) {
    // Remove the first message from the queue using shift()
    let msg = messageQueue.pop();
    console.log("Consumed:", msg);
  }
  console.log("All messages consumed. Queue is now empty.");
}

// ---- Program Execution ----
displayQueue();
consumeMessages();
displayQueue();