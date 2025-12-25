//Write a program to simulate clock adjustment by storing a time value in a variable and then adding or subtracting seconds from that value.

let clock = {
server: 15000,
node1: 3000,
node2: 8000,
node3: 45000,
node4: 7800
};
function ToSee(clock) {
console.log(`\n ${clock}`);
for (const [name, time] of Object.entries(clock)) {
console.log(`${name} : ${time}`);
}
}

ToSee("initial time is ");
const time = Object.values(clock);
const avg=time.reduce((sum ,val)=>sum+val,0/time.length);
const adjustment ={}
for(const [name ,time] of Object.entries(clock)){
adjustment[name]=avgTime - time;
}
for(const [adjust , name] of Object.entries(adjustment)){
clock[name]+=adjust;
}
ToSee("new avg time is ");