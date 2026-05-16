
console.log(0 == ""); // true - loose equality, type coercion happens
console.log(0 == "0"); // true - loose equality, type coercion happens
console.log("" == "0"); // false - both are strings, no type coercion, different values
                        // transitivity broken in loose equality

console.log(0 == false); // true - loose equality, type coercion happens
console.log(null == 0); // false - strict equality, no type coercion, different types

console.log(null == undefined); // true - loose equality, type coercion happens
console.log(null === undefined); // false - strict equality, no type coercion, different types