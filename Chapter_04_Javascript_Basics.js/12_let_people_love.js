//let is block scoped and cannot be re-declared in the same scope, but can be re-assigned. It is not hoisted like var and will throw an error if accessed before declaration. It is generally recommended to use let for variables that may change value and const for variables that should not change.
let l = 20;

let retry = 0;
retry = retry + 1;
retry = retry + 1;
console.log(retry); // 2

let retry = 5; // SyntaxError: Identifier 'retry' has already been declared 
// redeclaration not allowed with let
