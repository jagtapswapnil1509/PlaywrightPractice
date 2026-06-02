// pure function
// A pure function always return a same output for the same input

// Pure - no side effects , predictable output

function calculatePassRate(total,passed){
    return ((passed/total)*100).toFixed(2);
}

console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));

// impure function - depends on the external state

function isPassing(score){
    return score >= thershold;
}
let thershold = 70;
console.log(isPassing(thershold));
thershold = 50;
console.log(isPassing(thershold));