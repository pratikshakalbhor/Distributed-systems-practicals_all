# Distributed Systems Practicals

This repository contains simple and exam-oriented programs for **Distributed Systems** concepts.  
All programs are written in **JavaScript (Node.js)** and focus on clarity and understanding.

---

## 📘 Topics Covered

### 1. Client–Server Basics
- Client sending message to server
- Server responding to client

### 2. RPC Simulation
- Addition, subtraction, multiplication
- Division with zero check
- Percentage and average calculation

### 3. Clock & Time Simulation
- Current system time
- Clock adjustment by adding/subtracting seconds

### 4. Mutual Exclusion & Critical Section
- Resource request simulation
- Critical section using boolean lock
- Process blocking and releasing lock

### 5. Leader Election
- Highest process ID selected as leader

### 6. Key–Value Store
- Put and Get operations using Map
- Replication using object copy / spread operator

### 7. Producer–Consumer
- Producer adding messages to queue
- Consumer removing messages from queue

### 8. Distributed Chat Logging
- Logging chat messages into file using `appendFile()`


---

## ⚙️ How to Run

1. Install **Node.js**
2. Open terminal in the required folder
3. Run the server first:
```bash
node server_divide.js

Open a new terminal and run the client:
node client_divide.js
