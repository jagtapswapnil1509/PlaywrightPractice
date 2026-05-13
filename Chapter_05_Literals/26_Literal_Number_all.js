// 26_Literal_Number_all.js
// Comprehensive overview of number types and literals in JavaScript

// JavaScript primarily uses the 'number' type for all numeric values.
// It's a 64-bit floating-point number (IEEE 754 double precision).

// 1. Decimal integers
let decimalInt = 42;
console.log(decimalInt); // 42

// 2. Binary literals (ES6+)
let binaryInt = 0b101010; // 42 in binary
console.log(binaryInt); // 42

// 3. Octal literals (ES6+)
let octalInt = 0o52; // 42 in octal
console.log(octalInt); // 42

// 4. Hexadecimal literals
let hexInt = 0x2A; // 42 in hexadecimal
console.log(hexInt); // 42

// 5. Floating-point numbers
let floatNum = 3.14;
let scientific = 1.23e4; // 12300
console.log(floatNum); // 3.14
console.log(scientific); // 12300

// 6. Special number values
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(notANumber); // NaN

// 7. BigInt (ES2020+) - for arbitrary-precision integers
let bigInt = 123456789012345678901234567890n;
let anotherBigInt = BigInt("999999999999999999999999999999");
console.log(bigInt); // 123456789012345678901234567890n
console.log(anotherBigInt); // 999999999999999999999999999999n

// Note: BigInt cannot be mixed with regular numbers in operations
// console.log(bigInt + 1); // Error: Cannot mix BigInt and other types

// Type checking
console.log(typeof decimalInt); // "number"
console.log(typeof bigInt); // "bigint"

// All number literals are of type 'number' except BigInt literals (with 'n' suffix)
console.log(typeof 42); // "number"
console.log(typeof 42n); // "bigint"