// Exercise 1 — Test Score Delta Calculator
// Given two test runs, calculate:
//   a) the difference (run2 - run1)
//   b) the percentage change using the formula: ((run2 - run1) / run1) * 100
//   c) print whether performance IMPROVED, DROPPED, or STAYED THE SAME
// Expected output for the values below:
//   Delta: 15
//   Change: 20.00%
//   Result: IMPROVED
 
// let run1 = 75;
// let run2 = 90;
// // write your code here

// console.log("Delta:", run2 - run1);
// let change = ((run2 - run1) / run1) * 100;
// console.log(`Change:${change}`);
// if (run2 > run1) {
//     console.log("Result:IMPROVED");
// } else if (run2 === run1) {
//     console.log("Result:STAYED THE SAME");
// } else {
//     console.log("Result:DROPPED");
// }

// Exercise 2 — Compound Assignment Chain
// Start with responseTime = 500 (ms).
// Apply each step using compound operators:
//   Step 1: Add 200 (simulating a slow network)
//   Step 2: Subtract 50 (optimization applied)
//   Step 3: Multiply by 1.1 (10% overhead added)
//   Step 4: Divide by 2 (caching halved the time)
//   Step 5: Use modulus % 100 (get last two digits only)
// Print the final value after all steps.
 
// let responseTime = 500;
// // write your code here

// let a = responseTime +200;
// console.log("Step1:",a);
// let b = a - 50;
// console.log("Step2:",b);
// let c = b*1.1;
// console.log("Step3:",c);
// let d = c/2;
// console.log("Step4:",d);
// let e = d%100;
// console.log("Step5:",e);
// console.log("final Value=",e);

// // Exercise 3 — Pre vs Post Increment Prediction
// // WITHOUT running the code first, write what you expect each log to print.
// // Then run it and verify.
 
// let x = 5;
// let a = x++;     // Q: what is a? what is x after this?    
// let b = ++x;     // Q: what is b? what is x after this?    
// let c = x-- + --x; // Q: what is c? what is x after this?           
 
// console.log("a =", a);
// console.log("b =", b);
// console.log("c =", c);
// console.log("x =", x);

// Exercise 4 — Strict vs Loose Equality Bug Hunt
// Each line has a comment saying what a developer EXPECTED.
// Run the code and fix any lines that produce the wrong result
// by changing == to === (or the reverse where needed).
// Add a comment explaining WHY you changed it.
 
// let statusCode = "200";
 
// if (statusCode == 200) {           // Expected: true (catch string "200" as a 200 response) // no Need to change
//     console.log("E4-A: Status OK");
// }
 
// if (statusCode == 200) {          // Expected: false (strict type check - "200" is a string, not number) // no Need to change
//     console.log("E4-B: Strict match");
// }
 
// let retries = 0;
// if (retries == false) {            // Expected: print warning (0 == false is true due to coercion) // added =
//     console.log("E4-C: No retries performed — investigate!");
// }
 
// let apiResponse = null;
// if (apiResponse == undefined) {    // Expected: true (treat null and undefined as "nothing returned") // added= 
//     console.log("E4-D: API returned nothing");
// }

// Exercise 5 — Logical Operators: Access Control
// A feature should be accessible only when ALL three are true:
//   - user is logged in
//   - user role is "Admin" or "Editor"
//   - account is NOT locked
// Print "Access Granted" or "Access Denied" using a single if/else.
 
// let isLoggedIn = true;
// let userRole = "Editor";
// let isAccountLocked = false;
// // write your code here

// if (isLoggedIn && userRole === "Editor" && !isAccountLocked) {
//     console.log("Access Denied");
// }
// else {
//     console.log("Access Denied");
// }


// Exercise 6 — Nullish Coalescing (??) vs OR (||)
// Fill in the blanks and predict the output BEFORE running.
// Then run and check.
// Key rule: ?? returns right side only when left is null/undefined
//           ||  returns right side when left is ANY falsy value (0, "", false, null, undefined)
 
// let timeout = 0;
// let defaultTimeout = 3000;
 
// let result_OR  = timeout || defaultTimeout;    // Q: what is result_OR?   3000
// let result_NULL = timeout ?? defaultTimeout;   // Q: what is result_NULL?
 
// console.log("OR result :", result_OR);
// console.log("?? result :", result_NULL);
// // Which one should a QA use when timeout=0 is a valid config value? Write your answer as a comment.


// Exercise 7 — Ternary: API Environment Switcher
// Write a NESTED ternary (no if/else allowed) that sets baseURL:
//   env === "production"  →  "https://api.prod.example.com"
//   env === "staging"     →  "https://api.staging.example.com"
//   anything else         →  "https://api.dev.example.com"
// Test with env = "staging". Expected: https://api.staging.example.com
 
// let env = "Dev";
// let baseURL = (env === "production" ? "https://api.prod.example.com" :
//     (env === "staging" ? "https://api.staging.example.com" : "https://api.dev.example.com"));
// // write your code here 
// console.log("Base URL:", baseURL)


// Exercise 8 — for loop: Print Multiplication Table
// Print the multiplication table for 7, from 7x1 to 7x10.
// Expected first line:  7 x 1 = 7
// Expected last line:   7 x 10 = 70
 
// // write your code here
// for(let i=1;i<=10;i++){
//     console.log("7 *",i,"=",(7 * i));
// }

// Exercise 11 — while loop: Retry Until Success (Simulated)
// Simulate a flaky API call. Use a while loop that retries up to 5 times.
// Treat attempt number 4 as the "successful" attempt.
// Print each attempt: "Attempt 1: FAILED", "Attempt 2: FAILED" etc.
// When successful: "Attempt 4: SUCCESS — stopping retries"
// After the loop: print how many attempts were needed.
 
let maxRetries = 5;
let attempt = 1;
// write your code here
while (attempt <= maxRetries) {
    if (attempt === 4) {
        console.log("Attempt 4: SUCCESS — stopping retries");
        break;
    } else {
        console.log("Attempt", attempt, "FAILED");
    }
    attempt++;
}