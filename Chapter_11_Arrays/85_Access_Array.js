
// Accessing and Modification

let statues = ["Pass","Fail","Skip"];
// Accessing array using the index
console.log(statues[1]);
console.log(statues[2]);

console.log(statues.at(-1));
//console.log(statues.(-1));// if we remove at function, then output shows as undefined
console.log(statues.at(-2));
console.log(statues.at(-3));
// console.log(statues.at(-4)); // undefined

// modification
statues[1]="Blocked";
console.log(statues);