
let testRun = new Promise(function(resolve,reject){
    let apicall = true;
    if (apicall) {
        resolve({ "Status": "done" });
    } else {
        reject("Assertion failed");
    }
});

testRun.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    // This code always be executed anyhow
    console.log("I will execute anyhow!");
});