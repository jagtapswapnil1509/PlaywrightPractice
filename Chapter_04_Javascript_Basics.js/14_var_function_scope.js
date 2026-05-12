var a = 10;
console.log(a); // global scope

function printhello(){
    console.log("hello");
    var a = 20; // function scope,local scope
    console.log(a);
    if(true){
        var a =30; // function scope, re-declared and re-assigned
        console.log(a);
    }
    console.log("F->", a); 
}
console.log("G->", a);
printhello();