// 29_Backtick_single_double.js
// Difference between backtick, single, and double quotes in JavaScript strings

// Single quotes (' ') and double quotes (" ") are interchangeable for basic strings.
let single = 'Hello';
let double = "Hello";
console.log(single === double); // true

// Backticks (` `) are template literals: allow interpolation and multi-line strings.
let name = 'World';
let template = `Hello, ${name}!`;
console.log(template); // "Hello, World!"

// Example: Multi-line with backticks
let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);