let a = 10;
console.log(a); // global scope

function printhello(){
    console.log("hello");
    let a = 20; // function scope,local scope
    console.log(a);
    if(true){
        let a =30; // function scope, re-declared and re-assigned
        console.log(a);
    }
    console.log("F->", a); 
}
console.log("G->", a);
printhello();