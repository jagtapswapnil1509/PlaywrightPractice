// creating array

let browser = ["Chrome" , "Firefox" , "Safari"]; // Array Literals (Prefered)

// Array Constructor

let score = new Array(3); // 3 is mentioned as total number of elements not an index i.e 3 is a lenght
score[0]=1;
score[1]=1;
score[2]=1;
let score2 = new Array(1,2,3);

console.log(score);
console.log(score2);

let numbers = [100,200,300,400]; // lenght = 4 (0-3)
console.log(numbers);

// Array.of
let test = Array.of(1,2,3,4);
console.log(test);

//Array.from()

let test1 = Array.from("Hello");
console.log(test1);

// let numbers1 = Array.from("123456789");
// console.log(numbers1);
// The above not  mostely used.
// Array.from() always used with character data.