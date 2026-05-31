// slicing and combining

let arr =[1,2,3,4,5];

console.log(arr.slice(1,3)); // returns (start, end - 1)

console.log(arr.slice(2,4));

console.log(arr.slice(2,5));

console.log(arr.slice(2,6));

console.log(arr.slice(2));

console.log(arr.slice(-2));

console.log(arr.slice(0));

const arr1 = [1, 2, 3, 4, 5];
const sliced = arr1.slice(1, 3);  // [2, 3]
console.log(sliced); 
console.log(arr1);                // [1, 2, 3, 4, 5] - unchanged


const arr2 = [1, 2, 3, 4, 5];
const spliced = arr2.splice(1, 2, 'x', 'y');  // [2, 3] - removed
console.log(spliced);     
console.log(arr2);                              // [1, 'x', 'y', 4, 5]