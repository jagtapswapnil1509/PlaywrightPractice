function getString(name: string): string {
    return "Amit";
}

getString("pramod");
// getFirstResult(123);

// Generics in TypeScript are one of the most powerful features. 
// They allow you to write reusable, type-safe code without knowing the exact data type in advance.


function getFirstResult<T>(result:T[]){
    return result[0]!; // 
}

// !tells the compiler: "this value is NOT null or undefined — stop warning me." 
// Compile - time only.Zero runtime effect(strips out in compiled JS).

let firstcode = getFirstResult<number>([200,400,700]);
let firstTest = getFirstResult<string>(["login","signup"]);

console.log("First code",firstcode);
console.log("First Test",firstTest);