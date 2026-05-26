
let results =["Pass", "Fail","Pass","Skip","Error"];

//Indexof - returns first index , or -1 if  not found
console.log(results.indexOf("Fail")); // index = 1

console.log(results.indexOf("Removed")); // index = -1 because the element is not present

//lastIndexOf - searches from the end
console.log(results.lastIndexOf("Error"));

//Includes - returns boolean 
console.log(results.includes("Error"));
console.log(results.includes("Removed"));


//find - returns first matching element 
let num = [10,25,30,40];
num.find(x => x>20); // returns 25

//find index 
num.findIndex(n => n>20); // return index 1

//find last 
num.findLast(n => n>20); //  return 40

//find last index
num.findLastIndex(n => n>20); //  return 3