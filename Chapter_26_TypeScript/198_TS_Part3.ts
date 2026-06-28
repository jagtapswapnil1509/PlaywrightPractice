let unknown:unknown = "hello";

if(typeof unknown ==="string"){
    console.log("Hi");
}

let message:string = "Hello";

let username:string;
let userId:number;

// function annotation
function greet(name:string):string{
    return `Hello,${name}`;
}
let print = greet("Swapnil");
console.log(print);

// Arrow function annotations
const multiple = (a:number,b:number):number => a*b;

//object annotations
let user:{ name:string; age:number}={
    name:"John",
    age:46
};