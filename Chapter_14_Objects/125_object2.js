
//objects
//key and value

let student1 = {name:"swapnil",age:66};
let student2={name:"Kiran"};
let student3 = {name:"swapnil",age:66,mob:"7709006878"};

//key will not be in dounle quote
//below key in double quote actually mean JSON

let student4 = {"name":"swapnil","age":66,"mob":"7709006878"};

let a={status:"pass"};
// console.log(a.status);
// console.log(a["status"]);

let a1={status:"pass"};
// console.log(a1.status);

let b = a;
console.log(b.status);
b.status="fail";
console.log(a.status);
console.log(b.status);

if(b===a){
    console.log("Pass");
}else{
    console.log("Fail");
}