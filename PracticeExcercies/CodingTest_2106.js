// // // // // //Challenge 1 
// // // // //Problem Description:
// // // // //As an SDET, you receive an API response status code and need to classify it. 
// // // // // Write a JavaScript program using a switch statement that takes an HTTP status code stored in
// // // // //  a variable and prints the category and a QA-friendly message. - 200 → "PASS - OK: Request successful" - 
// // // // // 201 → "PASS - Created: Resource created successfully" - 301 → "WARNING - Moved Permanently: URL has changed" - 
// // // // // 400 → "FAIL - Bad Request: Check request payload" - 401 → "FAIL - Unauthorized: Check auth token" - 
// // // // // 403 → "FAIL - Forbidden: Insufficient permissions" - 404 → "FAIL - Not Found: Check endpoint URL" - 
// // // // // 500 → "FAIL - Internal Server Error: Backend issue" - Any other → "UNKNOWN - Unhandled status code"

// // // // //   let result;
// // // // //   const  statuscode = 201;
// // // // //   switch (statuscode) {
// // // // //     case 200:
// // // // //       result = "PASS - OK: Request successful";
// // // // //       break;
// // // // //     case 201:
// // // // //       result = "PASS - Created: Resource created successfully";
// // // // //       break; 
// // // // //     default:
// // // // //       result = "UNKNOWN - Unhandled status code";
// // // // //   }

// // // // //   console.log("Statuscode = "+ statuscode);
// // // // //   console.log("Result = "+ result);




// // // // //Challenge 2
// // // // //After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
// // // // // Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
// // // // // Print a test report with total tests, counts, pass rate percentage, and a verdict 
// // // // // (all passed → ready for release, ≤2 failures → review, >2 failures → block release).


// // // // let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

// // // // let TestPasscount = 0;
// // // // let TestFailcount = 0;
// // // // let Testskipcount = 0;
// // // // for (let i = 0; i < testResults.length; i++) {
// // // //     if (testResults[i] === "pass") {
// // // //         TestPasscount++;
// // // //     }
// // // //     if (testResults[i] === "fail") {
// // // //         TestFailcount++;
// // // //     }
// // // //     if (testResults[i] === "skip") {
// // // //         Testskipcount++;
// // // //     }
// // // // }
// // // // console.log("Pass test case count=" + TestPasscount);
// // // // console.log("Fail test case count=" + TestFailcount);
// // // // console.log("skip test case count=" + Testskipcount);
// // // // console.log("Total Test="+testResults.length);
// // // // let passrate = ((TestPasscount/(testResults.length))*100);
// // // // console.log("Pass Rate=" + passrate.toFixed(2));

// // // // if (TestFailcount === 0) {
// // // //   console.log("✅ VERDICT: All tests passed. Ready for release.");
// // // // } else if (TestFailcount <= 2) {
// // // //   console.log("⚠️ VERDICT: Minor failures. Review before release.");
// // // // } else {
// // // //   console.log("❌ VERDICT: Too many failures. Block release.");
// // // // }

// // // //Challenge 3: Retry Failed API Call
// // // //Problem Description:
// // // //In automation testing, API calls sometimes fail due to network issues. 
// // // // Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// // // // The program should retry a maximum of 5 times. Simulate random success/failure using Math.random()
// // // //  (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

// // // // const MAX_ATTEMPTS = 5;
// // // // let attemptnumber = 0;
// // // // let issuccess = false;

// // // // do{
// // // //     attemptnumber++;
// // // //     const randomvalue = Math.random();
// // // //     issuccess = randomvalue > 0.6;

// // // //     if(issuccess){
// // // //         console.log("Attempt "+attemptnumber+" Success");
// // // //     }else{
// // // //         console.log("Attempt "+attemptnumber+" Failed");
// // // //     }

// // // // }while(!issuccess && attemptnumber<MAX_ATTEMPTS);

// // // //Challenge 4: Element Visibility Checker
// // // //Problem Description:
// // // //In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// // // // Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
// // // // prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), 
// // // // and the ternary operator for severity level. States: READY (all true), 
// // // // DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present). 
// // // // Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

// // // let isPresent = true;
// // // let isDisplayed = true;
// // // let isEnabled = false ; 

// // // if (isPresent && isDisplayed && isEnabled){
// // //     console.log("States :READY");
// // // }else if((isPresent && isDisplayed) ||isEnabled){
// // //     console.log("States :DISABLED");
// // // }else if (isPresent || isDisplayed){
// // //     console.log("States :HIDDEN");
// // // }else{
// // //      console.log("States :NOT FOUND");
// // // }

// // // const Severity = !isPresent ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK";
// // // console.log("Severity = "+Severity);

// // // Challenge 5: Test Data Generator
// // // Problem Description:
// // //As an SDET, you frequently need to generate test data for form testing. 
// // // Write a JavaScript program that generates test user data using a for loop.
// // //  Each user should have a unique ID (USR-0001 format), name, email, 
// // // and role (cycling through: admin, editor, viewer, tester, manager). 
// // // Every 3rd user should be inactive (edge case testing). 
// // // Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

// // // Challenge 7: Response Time SLA Analyzer
// // // Problem Description:
// // //As a performance tester, you collect API response times in milliseconds. 
// // // Write a JavaScript program using a while loop that analyzes an array of response times and 
// // // prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
// // // Use comparison operators for min/max tracking.

// // var responseTimes = [120, 230, 450, 510, 180, 620] ;
// // var SLA_LIMIT = 500;

// // let totalresponse = responseTimes.length;
// // console.log(totalresponse);

// // let FirstResponse = responseTimes[0];
// // for(let i = 0 ;i<responseTimes.length;i++){
// //     if(responseTimes[i] <= FirstResponse){
// //         console.log("Min Response="+responseTimes[i]);
// //     }
// // }


// let invoiceId = "INV-2026-00451";
// console.log(invoiceId.slice(4, 8));       // 2026
// console.log(invoiceId.slice(-5));         // 00451
// console.log(invoiceId.substring(4, 8));   // 2026
// console.log(invoiceId.substring(-5));     

// let code = "ERR-500-TIMEOUT"; 

// console.log(code.slice(-7)); // TIMEOUT
// console.log(code.substring(-7)); //TIMEOUT

// let url = "https://staging.app.com/api/v2/users?id=10"; 
// let r = url.startsWith("https");
// console.log(r);
// let r1 = url.includes("v2");
// console.log(r1);
// let r2 = url.indexOf("?id");
// console.log(r2);

let raw = "  LOGIN_test_Case_01  ";
let raw1 = raw.trim().toLowerCase().replaceAll("_"," "); 
console.log(raw1);

