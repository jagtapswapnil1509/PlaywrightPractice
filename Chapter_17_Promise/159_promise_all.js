
// let checkAuth = Promise.resolve("Auth Okay");
// let checkDB = Promise.resolve("DB Okay")
// let checkCatch = Promise.resolve("Catch Okay");

// Promise.all([checkAuth,checkDB,checkCatch]).then(function(results){
//     console.log(results);
// });


// Promise.all([
//     Promise.resolve("Okay"),
//     Promise.reject("DB down"),
//     Promise.resolve("Catch okay")
// ]).then(function(r){
//     console.log(r);
// }).catch(function(error){
//     console.log("Failed",error);
// });


Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function(results){
    results.forEach(function(r,i){
        console.log("Test"+(i+1)+":",r.status,"-",r.value || r.reason);
    });
});

// This is like test report
// You want results for all tests
// not just stop at first failure