
let arr=[1,2,3];

arr.push(4,5,6);
console.log(arr);

// splice (start,deletecount....item added)

// arr.splice(2,1);
// console.log(arr);

// arr.splice(2,0,99); // 0 indicate no deletion , 99 indicate the addition of that value
   // this is acting as add
// console.log(arr);

// arr.splice(2,1,99); // 1 indicate 1 deletion , 99 indicate the addition of that value
// // this is acting as replace
// console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);
