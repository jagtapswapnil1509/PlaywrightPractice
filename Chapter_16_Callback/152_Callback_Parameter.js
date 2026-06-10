function greetTester(name,callback){
    console.log("welcome"+name);
    callback();
}

greetTester("swapnil",function(){
    console.log("Lets start testing");
})

// callback with parameter

function runTest(testName,callback){
    let status="Pass";
    callback(testName,status);
}

runTest("Login Test",function(name,result){
    console.log(name+"->"+result);
})

// synch callback - forEach

let bugs = ["UI glitch","API timeout","Wrong redirect"];

bugs.forEach(function(bug,i){
    console.log("Bug #"+(i+1)+":"+bug);
})
console.log("total Bug:"+bugs.length);