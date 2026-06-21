// // // // Question 1 — HTTP Status Code Categorizer
// // // // Problem: Given an HTTP status code, print which category it belongs to.

// // // let statuscode = 605;
// // // if (statuscode >= 200 && statuscode < 299) {
// // //     console.log(`Input : ${statuscode} \nOutput : Success`);
// // // } else if (statuscode >= 300 && statuscode < 399) {
// // //     console.log(`Input : ${statuscode} \nOutput : Redirection`);
// // // } else if (statuscode >= 400 && statuscode < 499) {
// // //     console.log(`Input : ${statuscode} \nOutput : Client Error`);
// // // } else if (statuscode >= 500 && statuscode < 599) {
// // //     console.log(`Input : ${statuscode} \nOutput : Server Error`);
// // // } else {
// // //     console.log("Status code is invalid");
// // // }

// // // // Question 2 — Test Case Pass/Fail Verdict

// // // // Problem: Compare actual result with expected result and print test verdict.

// // // let actual = "Invalid Credentials";
// // // let expected = "Login Successful";
// // // if (actual === expected){
// // // console.log("✅ Test Passed");
// // // }else{
// // //     console.log(`❌ Test Failed - Expected : ${expected} , Got : ${actual}`);
// // // }

// // // // Question 3 — Bug Severity Classifier

// // // // Problem: Given a bug's impact score (1–10), classify the severity.

// // // let bugScore = 9;
// // // if (bugScore >= 9 && bugScore <= 10) {
// // //     console.log(`Input:${bugScore} \nOutput:Severity: Critical — Block release`);
// // // } else if (bugScore >= 7 && bugScore <= 8) {
// // //     console.log(`Input:${bugScore} \nOutput:Severity: High`);
// // // } else if (bugScore >= 4 && bugScore <= 6) {
// // //     console.log(`Input:${bugScore} \nOutput:Severity: Medium`);
// // // } else if (bugScore >= 1 && bugScore <= 3) {
// // //     console.log(`Input:${bugScore} \nOutput:Severity: Low`);
// // // } else {
// // //     console.log("Invalid Score");
// // // }

// // // // Question 4 — Build Health Reporter

// // // // Problem: Given the percentage of test cases passed in a CI build, report build health.

// // // let testCasePercentagePass = 65;
// // // if (testCasePercentagePass === 100){
// // //     console.log(`Input:${testCasePercentagePass} \nOutput:Green Build`)
// // // }else if(testCasePercentagePass >=90 && testCasePercentagePass < 99){
// // //      console.log(`Input:${testCasePercentagePass} \nOutput: 🟡  Stable (investigate failures)`)
// // // }else if(testCasePercentagePass >=70 && testCasePercentagePass < 89){
// // //      console.log(`Input:${testCasePercentagePass} \nOutput: Unstable`)
// // // }else if(testCasePercentagePass <70){
// // //      console.log(`Input:${testCasePercentagePass} \nOutput:🔴 Broken Build — Block deployment`)
// // // }

// // // // Question 5 — Login Lockout After Failed Attempts

// // // // Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// // // let loginAttempt = 3;
// // // if(loginAttempt === 0){
// // //     console.log(`Input:Attempts = ${loginAttempt} \nOutput: Login Successful`);
// // // }else if (loginAttempt === 2){
// // //     console.log(`Input:Attempts = ${loginAttempt} \nOutput: 1 attempt left before lockout`);
// // // }else if (loginAttempt === 3){
// // //     console.log(`Input:Attempts = ${loginAttempt} \nOutput: 🔒 Account Locked — Contact support`);
// // // }


// // // let num = 0;

// // // // Write your if-else logic here

// // // if(num > 0){
// // //     console.log("Postive number");
// // // }else if(num < 0){
// // //     console.log("Negative number");
// // // }else{
// // //     console.log("Zero number");
// // // }

// // let username = "admin";
// // let password = "12345";

// // // Assume valid credentials:
// // // admin / 1234
// // if(username === "admin" && password === "1234"){
// //     console.log("login Successful");
// // }else{
// //     console.log("login not Successful");
// // }

// // let password = "MyPass";

// // let length = password.length;

// // if(length < 8){
// //     console.log("Password is week");
// // }else if (length >=8 && length <=11){
// //     console.log("Password is medium");
// // }else{
// //     console.log("Password is Strong");
// // }

// let day = 13;

// // 1 -> Monday
// // 2 -> Tuesday
// // 3 -> Wednesday
// // 4 -> Thursday
// // 5 -> Friday
// // 6 -> Saturday
// // 7 -> Sunday

// switch(day){
//     case 1:
//         console.log("Mon");
//         break;
//     case 2: 
//         console.log("Tue");
//         break;
//     case 3:
//         console.log("Wed");
//         break;
//     default:
//         console.log("Not match"); 
// }

let day = 6;
switch (day) {
    case 5:
        console.log("Weekday");
        break;
    case 6:
        console.log("weekend");
        break
    default:
        console.log("invalid value");

}

