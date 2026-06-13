
let apicall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "user data"
    })


});
apicall.then(function(response) {
    console.log(response);
    console.log(response.status);  
});

// .then() runs only when the promise resolve successfully.
// .then() is just alternate name of resolve
