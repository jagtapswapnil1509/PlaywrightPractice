
//scope in function

let env = "Staging";

function setConfig(){
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setConfig();
console.log(env);
console.log(timeout);
