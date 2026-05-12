var v =10;

// var is function scoped, can be re-declared and re-assigned

console.log(v); //global scope

function say(){
    console.log("hello");
    var v = 20; // function scope, re-declared and re-assigned
    console.log(v);
}

say();

// var is fillper , dual face , not trust worthy , can cause bugs in large codebase