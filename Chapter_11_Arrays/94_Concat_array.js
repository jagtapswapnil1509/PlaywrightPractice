let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);

// spread(modern way)... concatination (...) 3 dots
let d = [...a,...b];
console.log(d);

// join function

let s = ["pass","Fail","Skip"];
let k = s.join("|");
let l = s.join("-");
console.log(k);
console.log(l);