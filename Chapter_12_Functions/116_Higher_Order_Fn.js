// higher order function
//A function that takes a function as argument or return a function

function runwithLogin(testfn,testName){
    let result = testfn();
    return result + testName;

}

function loginTestPass(){
    return "Pass";
}

function loginTestFail(){
    return "Fail";
}

let m = runwithLogin(loginTestPass,"Login Test");
console.log(m);

let n = runwithLogin(loginTestFail,"Dashboard fail Test");
console.log(n);