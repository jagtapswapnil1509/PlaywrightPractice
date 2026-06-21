// // // // // // // // // // // // // Excercise 1:
// // // // // // // // // // // // // function testVar() {
// // // // // // // // // // // // //   var x = 1;
// // // // // // // // // // // // //   if (true) {
// // // // // // // // // // // // //     var x = 2;
// // // // // // // // // // // // //     console.log(x); // A
// // // // // // // // // // // // //   }
// // // // // // // // // // // // //   console.log(x); // B
// // // // // // // // // // // // // }
// // // // // // // // // // // // // testVar();

// // // // // // // // // // // // // Excercise 2:
// // // // // // // // // // // // // let count = 10;
// // // // // // // // // // // // // if (true) {
// // // // // // // // // // // // //   let count = 20;
// // // // // // // // // // // // //   console.log("inside:", count); // A
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log("outside:", count); // B

// // // // // // // // // // // // // // Excercise 3:
// // // // // // // // // // // // // const retryLimit = 3;
// // // // // // // // // // // // // //retryLimit = 5;
// // // // // // // // // // // // // console.log(retryLimit);

// // // // // // // // // // // // // Excercise 4:
// // // // // // // // // // // // // console.log(typeof 42); //number
// // // // // // // // // // // // // console.log(typeof "hello"); // string
// // // // // // // // // // // // // console.log(typeof true); // boolean
// // // // // // // // // // // // // console.log(typeof undefined); // undefined
// // // // // // // // // // // // // console.log(typeof null); // object
// // // // // // // // // // // // // console.log(typeof {}); // object
// // // // // // // // // // // // // console.log(typeof []); // object
// // // // // // // // // // // // // console.log(typeof 42n);  // bigint

// // // // // // // // // // // // // Excercise 5
// // // // // // // // // // // // // console.log(1 == "1");      // ?
// // // // // // // // // // // // // console.log(1 === "1");     // ?
// // // // // // // // // // // // // console.log(0 == false);    // ?
// // // // // // // // // // // // // console.log(0 === false);   // ?
// // // // // // // // // // // // // console.log(null == undefined);  // ?
// // // // // // // // // // // // // console.log(null === undefined); // ?
// // // // // // // // // // // // // console.log("" == false);   // ?

// // // // // // // // // // // // // Excercise 6
// // // // // // // // // // // // // console.log(typeof username);
// // // // // // // // // // // // // console.log(username);
// // // // // // // // // // // // // var username = "tester";
// // // // // // // // // // // // // console.log(username);

// // // // // // // // // // // // // Excercise 7
// // // // // // // // // // // // // console.log(score);
// // // // // // // // // // // // // let score = 100;

// // // // // // // // // // // // // Excercise 8
// // // // // // // // // // // // // Your task: implement this function
// // // // // // // // // // // // // function generateReport(testName, status, duration) {
// // // // // // // // // // // // //   // use template literals here
// // // // // // // // // // // // //   return (`${status} ${testName} completed in ${duration}ms`);
// // // // // // // // // // // // // }

// // // // // // // // // // // // // console.log(generateReport("Login Test", "PASS", 1200));
// // // // // // // // // // // // // console.log(generateReport("Checkout Flow", "FAIL", 3400));

// // // // // // // // // // // // // Excercise 9
// // // // // // // // // // // // // let x = 20;
// // // // // // // // // // // // // x += 5;   // x = ?
// // // // // // // // // // // // // x -= 3;   // x = ?
// // // // // // // // // // // // // x *= 2;   // x = ?
// // // // // // // // // // // // // x /= 4;   // x = ?
// // // // // // // // // // // // // x %= 3;   // x = ?
// // // // // // // // // // // // // x **= 2;  // x = ?
// // // // // // // // // // // // // console.log(x);

// // // // // // // // // // // // // Excercise 10
// // // // // // // // // // // // // Your task: implement this
// // // // // // // // // // // // // function isEven(n) {
// // // // // // // // // // // //   // use the % operator
// // // // // // // // // // // // //   return n % 2 === 0;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // console.log(isEven(0));    // true
// // // // // // // // // // // // // console.log(isEven(1));    // false
// // // // // // // // // // // // // console.log(isEven(4));    // true
// // // // // // // // // // // // // console.log(isEven(7));    // false
// // // // // // // // // // // // // console.log(isEven(100));  // true

// // // // // // // // // // // // // Excercise 11
// // // // // // // // // // // // // var env = "production";
// // // // // // // // // // // // // function setup1() {
// // // // // // // // // // // // //   console.log(env);       
// // // // // // // // // // // // //   var env = "staging";
// // // // // // // // // // // // //   console.log(env);       
// // // // // // // // // // // // // }
// // // // // // // // // // // // // setup();
// // // // // // // // // // // // // console.log(env);         

// // // // // // // // // // // // // Excercise 12
// // // // // // // // // // // // // console.log(NaN == NaN);          // ?
// // // // // // // // // // // // // console.log(NaN === NaN);         // ?
// // // // // // // // // // // // // console.log(typeof NaN);          // ?

// // // // // // // // // // // // // let result = "hello" / 2;
// // // // // // // // // // // // // console.log(result);              // ?
// // // // // // // // // // // // // console.log(result == NaN);       // ?

// // // // // // // // // // // // // Your task: write a function safeIsNaN(val) that correctly
// // // // // // // // // // // // // returns true only when val is NaN
// // // // // // // // // // // // function safeIsNaN(val) {
// // // // // // // // // // // //   // hint: use Number.isNaN(), not the global isNaN()
// // // // // // // // // // // //   return Number.isNaN(val);
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(safeIsNaN(NaN));        // true
// // // // // // // // // // // // console.log(safeIsNaN("hello"));    // false
// // // // // // // // // // // // console.log(safeIsNaN(undefined));  // false


// // // // // // // // // // // const envUrls = {
// // // // // // // // // // //     dev: "https://dev.vwo.com",
// // // // // // // // // // //     staging: "https://staging.vwo.com",
// // // // // // // // // // //     prod: "https://app.vwo.com"
// // // // // // // // // // // };

// // // // // // // // // // // let currentEnv = "staging";
// // // // // // // // // // // let workingEnv = "dev";
// // // // // // // // // // // console.log(envUrls[currentEnv]);  // 
// // // // // // // // // // // console.log(envUrls[workingEnv]);


// // // // // // // // // // const testReport = { total: 10, passed: 8 };
// // // // // // // // // // testReport.failed = 2;        // add new property
// // // // // // // // // // console.log(testReport);
// // // // // // // // // // testReport.passed = 9;  
// // // // // // // // // // console.log(testReport);      // modify existing property
// // // // // // // // // // delete testReport.failed;     // remove a property
// // // // // // // // // // console.log(testReport); // { total: 10, passed: 9 }

// // // // // // // // // const response = {
// // // // // // // // //   statusCode: 200,
// // // // // // // // //   payload: 
// // // // // // // // //     { user: 
// // // // // // // // //         { role: "admin",Password: "test" }
// // // // // // // // //     }
// // // // // // // // // };

// // // // // // // // // const {statusCode: code} = response;
// // // // // // // // // console.log(code);

// // // // // // // // // const {payload : {user : {role} }} = response;
// // // // // // // // // console.log(role);
// // // // // // // // // const {payload : {user : {Password} }} = response;
// // // // // // // // // console.log(Password);

// // // // // // // // // const { retryCount = 3 } = response;
// // // // // // // // // console.log(retryCount);

// // // // // // // // // console.log(code, role,Password retryCount);


// // // // // // // // // const defaultConfig = { browser: "chrome", retries: 0 };
// // // // // // // // // const ciConfig      = { retries: 2, headless: true , browser: "firefox" };

// // // // // // // // // const finalConfig = { ...defaultConfig, ...ciConfig };
// // // // // // // // // console.log(finalConfig);
// // // // // // // // // console.log(defaultConfig);
// // // // // // // // // console.log(ciConfig);


// // // // // // // // const original = { settings: { theme: "dark" } };
// // // // // // // // const copy = { ...original };
// // // // // // // // console.log(original);
// // // // // // // // console.log(copy);

// // // // // // // // copy.settings.theme = "light";
// // // // // // // // console.log(original.settings.theme); // "light" — oops, original changed too!
// // // // // // // // console.log(original);
// // // // // // // // console.log(copy);


// // // // // // // const testCase = {
// // // // // // //     name: "Login Test",
// // // // // // //     _status: "Pending",
// // // // // // //     get status() {
// // // // // // //         return this._status.toUpperCase();
// // // // // // //     },
// // // // // // //     set status(value) {
// // // // // // //         this._status = value;
// // // // // // //     }
// // // // // // // };
// // // // // // // console.log(testCase._status);
// // // // // // // testCase.status = "pass";
// // // // // // // console.log(testCase.status); // "PASS" (getter formats it)



// // // // // // const apiStatusCounts = { 200: 45, 404: 3, 500: 1 ,507:9};

// // // // // // console.log(Object.keys(apiStatusCounts));   // ["200","404","500"]
// // // // // // console.log(Object.values(apiStatusCounts)); // [45, 3, 1]
// // // // // // console.log(Object.entries(apiStatusCounts));
// // // // // // // [["200",45], ["404",3], ["500",1]]

// // // // // // let total = Object.values(apiStatusCounts).reduce((a, b) => a + b, 0);
// // // // // // console.log("total=",total);

// // // // // // let total1 = Object.keys(apiStatusCounts).reduce((a, b) => a + b, 0);
// // // // // // console.log("total1=",total1);
// // // // // // for (const code in apiStatusCounts) {
// // // // // //     console.log(`${code} occurred ${apiStatusCounts[code]} times`);
// // // // // // }

// // // // // const original = { status: "Pending" };
// // // // // const copy = original;          // copy now points to the SAME object

// // // // // const copy1 = {...original};

// // // // // copy.status = "Passed";

// // // // // console.log(original);
// // // // // console.log(copy);
// // // // // console.log(copy1);


// // // // const apiResponse = {id:1,name:"Login",status:"Pass"}
// // // // const {id:idvalue,name:testname} = apiResponse;
// // // // console.log(idvalue,testname);

// // // const user = {
// // //     firstName: "Swapnil", lastName: "Jagtap",
// // //     get fullName() { return this.firstName + " " + this.lastName; },
// // //     set fullName(val) { [this.firstName, this.lastName] = val.split(" "); }
// // // };
// // // console.log(user.fullName);          // Swapnil Jagtap
// // // user.fullName = "Pramod Dutta";
// // // console.log(user.fullName);          // Pramod Dutta



// // const testSuite = { login: "Pass", checkout: "Fail", search: "Pass" };
// // console.log(Object.keys(testSuite));
// // console.log(Object.values(testSuite));
// // console.log(Object.entries(testSuite));
// // for (const key in testSuite) {
// //     console.log(`${key} -> ${testSuite[key]}`);
// // }


// let a = 10;
// let b = a;   // copies the VALUE
// b = 20;
// console.log(a, b);  // 10 20  -- a is untouched

// if(a === b){
//   console.log("Premitive data type is exactly matching");
// }else{
//   console.log("Premitive data type is not exactly matching");
// }

// // Reference
// let obj1 = { count: 10 };
// let obj2 = obj1;     // copies the REFERENCE (pointer), not the object
// obj2.count = 20;
// console.log(obj1.count, obj2.count);  // 20 20  -- both changed!

// if(obj1 === obj2){
//   console.log("object   is exactly matching");
// }else{
//   console.log("Object   is not exactly matching");
// }


// for (let i = 0; i < 5; i++) 
//   { if (i === 3) 
//     break; 
//   } 
// console.log(i);

function questionName(input) {
  let value = 201;
  switch (value) {
    case 200:
      "PASS - OK: Request successful";
      break;
    case 201:
      "PASS - Created: Resource created successfully";
      break; 
    default:
      "UNKNOWN - Unhandled status code";
  }

  return value;
}