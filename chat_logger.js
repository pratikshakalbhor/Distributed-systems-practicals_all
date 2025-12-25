// Write a program to log chat messages into a file by using file-write functions such as appendFile() or open(...,'a'). 
 

//log chat msg  store
//file by write function
//append or open

// Import the File System (fs) module
const fs = require('fs');

// Function to log a single chat message into a file
function logMessage(username, message) {
  // Create message format with timestamp
  let logEntry = `${new Date().toLocaleString()} - ${username}: ${message}\n`;
   console.log(logEntry)
  // Append the message to a file named 'chatlog.txt'
  fs.appendFile('chatlog.txt', logEntry, (err) => {
    if (err) {
      console.log("Error writing to file:", err);
    } else {
      console.log("Message logged successfully!");
    }
  });
}

// Function to simulate multiple chat messages
function simulateChat() {
  logMessage("Pratiksha", "Hello everyone!");
  logMessage("Dipali", "Hi Pratiksha, how are you?");
  logMessage("Omkar", "Good morning!");
}

// ---- Program Execution ----
simulateChat();