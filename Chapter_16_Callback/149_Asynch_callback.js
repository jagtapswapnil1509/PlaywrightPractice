
console.log("Test 1 - started");

// this function result will print after 2  min which is called as asynch callback function
setTimeout(function () {
    console.log("Test 2 - Started");
}, 2000);

console.log("Test 3 - started");