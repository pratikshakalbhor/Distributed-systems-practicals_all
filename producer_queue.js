// Write a program where a producer adds messages to a list acting as a queue by using methods such as queue.append() or queue.push(). 

   
//MSG ADD
// to list acting AS queue
//ARRAY  PUSH
// Create an empty list (array) to act as a queue
let messageQueue = [];

// Function for producer to add messages to the queue
function produceMessage(message) {
  messageQueue.push(message); // add message at the end of the queue
  console.log(`Produced: "${message}"`);
}

// Function to display all messages in the queue
function displayQueue() {
  console.log("Current Queue:", messageQueue);
}

// Function to simulate consuming (removing) a message from the queue
function removeMessage() {
  if (messageQueue.length > 0) {
    let msg = messageQueue.shift(); // remove first message
    console.log(`Consumed: "${msg}"`);
  } else {
    console.log("Queue is empty, nothing to consume.");
  }
}

// ---- Program Execution ----
// Producer adds messages
produceMessage("SEND BLOCKCHAIN DATA");
produceMessage("SEND IMAGES OF TOYOTA");
produceMessage("AI CHATGPT");

// Display current queue
displayQueue();

// Consumer takes one message
removeMessage();

// Display queue after consuming
displayQueue();