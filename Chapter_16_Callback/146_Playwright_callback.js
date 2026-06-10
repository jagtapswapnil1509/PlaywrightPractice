
function test(testName,callback){
    console.log(testName);
    callback();
}

test("verify the login page",()=>{
    console.log("here we will wright the playwright code");
})