//function that returns nothing - it return the empty
function sayHello(msg:string):void{
    console.log(msg);
}

//function annotations
function greet(name:string):string{
    return `Hello,${name}`;
}

//never - function neven returns (throws or infinate loops)
function throwError(message:string):never{
    throw new Error(message);
}

//function that never returns - it will never returns
function infiniteLoop():never {
    while(true){

    }
}