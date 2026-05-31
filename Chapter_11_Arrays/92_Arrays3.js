let fruits = ["banan","apple","cherry"];
fruits.sort();
console.log(fruits);

let number =[2,1,4];
number.sort();
console.log(number);

let num = [10,1,21,2];
num.sort();
console.log(num); // natural sorting or lexographic sorting.

num.sort((a,b)=>a-b); // ascending order sorting
console.log(num);

num.sort((a,b)=>b-a); // decending order sorting
console.log(num);