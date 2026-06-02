
function runTest(name,status,duration){
    return `${name}: ${status} ${duration}`;
}

const r = runTest("Login","Pass",3000);
console.log(r);