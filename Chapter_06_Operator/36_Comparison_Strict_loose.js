
// number == string
console.log(1 == '1'); // true - loose equality operator (==) performs type coercion
console.log(1 === '1'); // false - strict equality operator (===) does not perform type coercion 
// // comparison done of data type and converted values

console.log(5 === 5); // true - both value and type are the same
console.log(5 === '5'); // false - value is the same but type is different (number vs string)

console.log(5 == '5'); // true - loose equality operator (==) performs type coercion, so '5' is converted to 5 before comparison
console.log(5 == 5); // true - both value and type are the same, but even if they were different types, loose equality would still return true because of type coercion

console.log(0 == ''); // true - loose equality operator (==) performs type coercion, so '' is converted to 0 before comparison
console.log (0 === ''); // false - strict equality operator (===) does not perform type coercion, so 0 and '' are of different types (number vs string)

console.log(true == 1); // true - loose equality operator (==) performs type coercion, so true is converted to 1 before comparison
console.log(false == 0); // true - loose equality operator (==) performs type coercion, so false is converted to 0 before comparison

console.log(true == '1'); // true - loose equality operator (==) performs type coercion, so '1' is converted to 1 before comparison, and true is converted to 1 as well

console.log(5 !='5'); // false - loose inequality operator (!=) performs type coercion, so '5' is converted to 5 before comparison
console.log(5 !== '5'); // true - strict inequality operator (!==) does not perform type coercion, so 5 and '5' are of different types (number vs string)
//console.log(5 !==='5'); // does not work - SyntaxError: Unexpected token '===' - strict equality operator (===) cannot be used with the inequality operator (!==) in this way