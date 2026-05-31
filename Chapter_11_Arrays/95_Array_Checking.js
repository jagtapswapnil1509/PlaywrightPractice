//checking array

//check if someting is an array

let result = Array.isArray([1,2,3]);
console.log(result);
let result1 = Array.isArray("a");
console.log(result1);

//Every function
let b = [80,90,85].every(s=>s>=70); // this will check every array value with the condition
// and if all is match then it will return true.
console.log(b);

let c = [80,60,85].every(s=>s>=70);
console.log(c);

// Playwright API - Real example
let code = [200,201,203].every(statuscode => statuscode > 200);
console.log(code);

// some function  - this will check at least one array value with the condition
// and if is match then it will return true.

let e = [50,60,85].some(s=>s>=70);
console.log(e);

let f = [50,60,35].some(s=>s>=70);
console.log(f);

// Arrow function : s=> s>=90