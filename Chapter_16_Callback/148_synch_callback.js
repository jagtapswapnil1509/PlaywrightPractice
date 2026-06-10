
let testResults = ["Pass","Fail","Pass","Skip"];

testResults.forEach(function(result,index){
    console.log("Test"+index+"=>"+result);
})

// This is perfect example of synchronous call back function
// the anonomous function will take the item 1 by 1
// it will take the index 1 by 1 and it will take the result 1 by 1 and print the value 1 by 1