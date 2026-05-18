let SW_age = 18;
let SW_go_to_goa = SW_age > 16 ? "Yes, will go to goa" : "No , will not go to goa";
console.log(SW_go_to_goa);

let a = 10;
a += 10;
//a = +a; This does not exist. Invalid

// real time example 1

let expectedvalue = 200;
let actualvalue = 200;
let result = expectedvalue === actualvalue ? "Test Pass" : "Test Fail";
console.log(result);

// real time example 2

let environment = "Staging";
let BaseURL = environment === "Production" ?
    "https://api.production.com" :
    "https://api.staging.com";
console.log(BaseURL);

// real time example 3

let isCI = true;
let browsermode = isCI ? "headless" : "headed";
console.log("launching browser in" , browsermode, "mode");

// real time example 4

let responseTime = 800;
let SLAtime = 1000;
let SLAresult = responseTime <= SLAtime ? "SLA met" : "SLA not met";
console.log(`Response time: ${responseTime}ms - ${SLAresult}`);

// Ternary operator
// condition ? true : false;

// real time example 4

let condition = true;
let SRKMale = condition ? true : false;
console.log(SRKMale);

// Nested ternary operator
// multiple conditions

let age = 32;
let SW_Go_goa = age > 26 ? ( age > 18 ? "Yes, will go to goa and have drink" : "not have a drink") : "No, will not go to goa";
console.log(SW_Go_goa);

// interview question

let statuscode = 438;
let category =
    statuscode < 300 ? "Success" :
        statuscode < 400 ? "Redirection" :
            statuscode < 500 ? "Client Error" : "server error";
console.log(`status ${statuscode} , ${category}`);

// maximum number between 2 numbers
let x = 30 ; let y = 40;
let maxnumber = x > y ? "x is the maximum number" : "y is the maximum number";
console.log(`maximum number = ${maxnumber}`);

// maximum number between 3 numbers using ternary operator
let l = 100; let m = 170; let n = 90;
let maxnumber1 = l > m ?
    (l > n ? l : n) :
    (m > n ? m : n);
console.log(`maximum number = ${maxnumber1}`);

let temp = 35;
let feel = temp > 30 ? "hot" :
    temp > 20 ? "warm" :
        temp > 10 ? "cool" : "cold";
console.log(`temperature is ${temp} degree, it feels ${feel}`);