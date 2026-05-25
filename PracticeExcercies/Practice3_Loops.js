// ✅ Triangle Classifier:

// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene 
// (no sides are equal). Use an if-else statement to classify the triangle.

let sideA = 300;
let sideB = 100;
let sideC = 200;
if (sideA === sideB && sideA === sideC && sideB === sideC) {
    console.log("equilateral traingale all sides are equal");
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("isosceles traingale exactly two sides are equal");
} else {
    console.log("scalene traingale (no sides are equal)");
}

// ✅ FizzBuzz Test:

// Write a program that prints numbers from 1 to 100. 
// However, for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Number divisible by 3 & 5= ${i} Print = FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`Number divisible by 3= ${i} Print = Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Number divisible by 5= ${i} Print = Buzz`);
    } else {
        console.log("Number is not divisible Number");
    }
}