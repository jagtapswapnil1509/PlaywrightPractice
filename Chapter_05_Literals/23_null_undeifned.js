// 23_null_undeifned.js
// Simple explanation of null vs undefined in JavaScript

// undefined means a variable has been declared but not assigned a value.
let a;
console.log(a); // undefined

// null is an assignment value that means "no value" or "empty".
let b = null;
console.log(b); // null

// Key differences:
// 1. undefined is the default value for uninitialized variables, missing properties, and functions with no return.
// 2. null is a deliberate assignment used when you want to clear a value or indicate "no object".
// 3. typeof undefined is "undefined"; typeof null is "object" (this is a historical JavaScript quirk).

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"

// Example with a function:
function greet(name) {
  if (name === null) {
    return 'Hello, stranger!';
  }
  return `Hello, ${name || 'friend'}!`;
}

console.log(greet(undefined)); // "Hello, friend!"
console.log(greet(null));      // "Hello, stranger!"
