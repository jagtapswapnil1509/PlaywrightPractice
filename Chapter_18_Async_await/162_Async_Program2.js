
function getToken(){
    return Promise.resolve("abc123");
}

//in playwright we are using the same 
//page.goto()  --- promise()
// await page.goto();
// Rule no 1  - any function returns the promise we will always use await in front of it
// Any function which you think can basically work with any kind of promise, 
// we will use async in front of it

async function run(){
    let token = await getToken();
    console.log(token);
}

run();