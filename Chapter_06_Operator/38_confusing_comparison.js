// 38_confusing_comparison.js
// Demonstrate confusing JavaScript comparisons with == and ===

// Loose equality (==) performs type coercion before comparison.
// Strict equality (===) compares value and type without coercion.

console.log(0 == false);      // true: false coerces to number 0
console.log(0 === false);     // false: number vs boolean

console.log("" == false);   // true: empty string coerces to number 0
console.log("" === false);  // false: string vs boolean

console.log("0" == 0);      // true: string "0" coerces to number 0
console.log("0" === 0);     // false: string vs number

console.log(null == undefined);  // true: special loose equality rule
console.log(null === undefined); // false: different types

console.log([] == false);     // true: [] coerces to "" then to 0
console.log([] === false);    // false: object vs boolean

console.log([1] == 1);       // true: [1] coerces to string "1" then to number 1
console.log([1] === 1);      // false: object vs number

console.log([1,2] == "1,2"); // true: array coerces to string "1,2"
console.log([1,2] === "1,2"); // false: object vs string

console.log(" \t\n" == 0); // true: whitespace string coerces to number 0
console.log(" \t\n" === 0); // false: string vs number

console.log(false == "false"); // false: "false" cannot coerce to 0 or 1
console.log(false === "false"); // false: boolean vs string

// Best practice: use === unless you specifically want JavaScript's coercion rules.
