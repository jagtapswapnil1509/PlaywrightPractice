
let score = [45,82,91,60,73];

//map - transform every element , return a new array

// map will always return the same number of element you have but based on condition values will be changed.
// let grade = score.map(s => s>75 ? "Pass":"Fail");
// console.log(grade);

//filter keep the element that pass the test 

// let passing = score.filter(s => s > 75);
// console.log(passing);

// reduce - accumulate  to a single value

let total = score.reduce((a, b) => a + b, 0);
console.log(total);

//flat - flattens nested arrays

let nested = [[1,2],[3,4],6];
console.log(nested.flat());