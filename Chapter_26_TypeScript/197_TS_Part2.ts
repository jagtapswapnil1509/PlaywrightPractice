//primitive types

let name:string = "john";
let age:number = 27;
let pi:number = 3.14;
let distance_to_moon:number = 8787767886;
//let pi1:float = 3.14;  float data type is not available in both javascript and typescript
let isActive:boolean = true;
let nothing:null = null;
let notDefined:undefined = undefined;

//Arrays
let number:number[] = [1,2,4];
let names:Array<string> = ["John","jane"];

// Any(avoid when possible)
let anything:any = "Hello";

// unknown (safer than any)
let unknown:unknown = "Hello";


let message:string = "Hello,Typescript!";
let count:number = 42;
// let isActive:boolean = true;

console.log("Message:",message);
console.log("Count:",count);