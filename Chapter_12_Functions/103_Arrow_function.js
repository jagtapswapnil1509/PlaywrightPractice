// Arrow Function 

//Noraml function

function greet(name1){
    return "Hi " + name1;
}
let result = greet("Swapnil");
console.log(result);

// Arrow function 

const greet2 = (name2) => "Hello "+ name2 ;
let result2 = greet2("Jagtap");
console.log(result2);

//If you want to make normal functioning have a function 
//remove keyword function, remove keyword reader ,remove curly braces and use => 

const doubleIt = n => n*2;
console.log(doubleIt(10));

const printit=name => console.log(name);
printit("jagtap");

function add(a,b){
    return a+b;
}

const add2 = (a,b) => a+b;


function say(){
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => "Hi";

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}
