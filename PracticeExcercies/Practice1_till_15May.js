// Excercise 1:
// function testVar() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x); // A
//   }
//   console.log(x); // B
// }
// testVar();

// Excercise 2:
// let count = 10;
// if (true) {
//   let count = 20;
//   console.log("inside:", count); // A
// }
// console.log("outside:", count); // B

// // Excercise 3:
// const retryLimit = 3;
// //retryLimit = 5;
// console.log(retryLimit);

// Excercise 4:
// console.log(typeof 42); //number
// console.log(typeof "hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof 42n);  // bigint

// Excercise 5
// console.log(1 == "1");      // ?
// console.log(1 === "1");     // ?
// console.log(0 == false);    // ?
// console.log(0 === false);   // ?
// console.log(null == undefined);  // ?
// console.log(null === undefined); // ?
// console.log("" == false);   // ?

// Excercise 6
// console.log(typeof username);
// console.log(username);
// var username = "tester";
// console.log(username);

// Excercise 7
// console.log(score);
// let score = 100;

// Excercise 8
// Your task: implement this function
// function generateReport(testName, status, duration) {
//   // use template literals here
//   return (`${status} ${testName} completed in ${duration}ms`);
// }

// console.log(generateReport("Login Test", "PASS", 1200));
// console.log(generateReport("Checkout Flow", "FAIL", 3400));

// Excercise 9
// let x = 20;
// x += 5;   // x = ?
// x -= 3;   // x = ?
// x *= 2;   // x = ?
// x /= 4;   // x = ?
// x %= 3;   // x = ?
// x **= 2;  // x = ?
// console.log(x);

// Excercise 10
// Your task: implement this
// function isEven(n) {
  // use the % operator
//   return n % 2 === 0;
// }

// console.log(isEven(0));    // true
// console.log(isEven(1));    // false
// console.log(isEven(4));    // true
// console.log(isEven(7));    // false
// console.log(isEven(100));  // true

// Excercise 11
// var env = "production";
// function setup1() {
//   console.log(env);       
//   var env = "staging";
//   console.log(env);       
// }
// setup();
// console.log(env);         

// Excercise 12
// console.log(NaN == NaN);          // ?
// console.log(NaN === NaN);         // ?
// console.log(typeof NaN);          // ?

// let result = "hello" / 2;
// console.log(result);              // ?
// console.log(result == NaN);       // ?

// Your task: write a function safeIsNaN(val) that correctly
// returns true only when val is NaN
function safeIsNaN(val) {
  // hint: use Number.isNaN(), not the global isNaN()
  return Number.isNaN(val);
}
console.log(safeIsNaN(NaN));        // true
console.log(safeIsNaN("hello"));    // false
console.log(safeIsNaN(undefined));  // false