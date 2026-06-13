// //example 1
// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// p.then(function (value) {
//     console.log("Answer:", value);
// });

// //example 2
// let pp = new Promise(function (resolve, reject) {
//     reject("something broke");
// });
// pp.catch(function (err) {
//     console.log("caught:", err);
// })

// //example 3

// let ppp = Promise.resolve(5);

// ppp.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// });

// //example 4

// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//     });


//example 5
// Promise.resolve("Start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     }).then(function () {
//         console.log("This will not run");
//     }).catch(function (err) {
//         console.log("Caught:", err.message);
//     });


//example 6

// Promise.reject("Test Failed")
// .then(function(data){
//     console.log("Data:",data);
// }).catch(function(err){
//     console.log("Error:",err);
// }).finally(function(){
//     console.log("Cleanup done");
// });

//example 7

// Promise.resolve("quick win").then(function(msg){
//     console.log(msg);
// });

// Promise.reject("Quick Loss").catch(function(msg){
//     console.log(msg);
// });

//example 8

// let t1 = Promise.resolve("Login:Pass");
// let t2 = Promise.resolve("Search:Pass");
// let t3 = Promise.resolve("Logout:Pass");

// Promise.all([t1,t2,t3]).then(function(results){
//     console.log(results);
// });

//example 9

// let t1 = Promise.resolve("Pass");
// let t2 = Promise.reject("Fail");
// let t3 = Promise.resolve("Pass");

// Promise.all([t1,t2,t3])
// .then(function(r){console.log("All",r)})
// .catch(function(err){console.log("Stopped",err);});

//example 10

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results){
    results.forEach(function(r){
        console.log(r);
        let val = r.status === "fulfilled" ? r.value:r.reason;
        console.log(r.status + "->" + val);
    });
});
