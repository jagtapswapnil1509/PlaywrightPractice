
function outer() {
    let message = "Hello";
    console.log("Outer function called");
    function inner() {
        console.log(message);
    }
    return inner;
}
let result = outer();
result();

//inner(); // Reference error : inner is not defined