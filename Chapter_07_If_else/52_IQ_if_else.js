
// if ("hello") console.log("String is truthy"); // "hello" => truthy value
// if (42) console.log("Number is truthy"); // 42 => truthy value
// if ({}) console.log("Object is truthy"); // {} => truthy value
// if ([]) console.log("Array is truthy"); // [] => truthy value

// if ("") console.log("Empty string is truthy"); // "" => falsy value
// if (null) console.log("null is truthy"); // null => falsy value   
// if (undefined) console.log("undefined is truthy"); // undefined => falsy value
// if (NaN) console.log("NaN is truthy"); // NaN => falsy value
// if (0) console.log("0 is truthy"); // 0 => falsy value

let name = undefined;
if(name){
    console.log("Hi");
}else{
    console.log("Bye");
}