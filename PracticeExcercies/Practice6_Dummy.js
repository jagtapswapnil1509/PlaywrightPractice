// // // // // // // //ORIGINAL (var version):
// // // // // // // for (var i = 1; i <= 3; i++) {
// // // // // // //     console.log("Attempt:", i);
// // // // // // // }
// // // // // // // console.log("After loop, i =", i);   // leaks! what does this print?

// // // // // // // for (let j = 1; j <= 3; j++) {
// // // // // // //     console.log("Attempt:", j);
// // // // // // // }
// // // // // // // console.log("After loop, j =", j); 


// // // // // // // let totalTests = 50;
 
// // // // // // // Complete the blanks:
// // // // // // // The KEYWORD is:    let
// // // // // // // The IDENTIFIER is: total Test
// // // // // // // The LITERAL is:    50
// // // // // // // The OPERATOR is:   =


// // // // // // let attendance = [
// // // // // //   ["P", "P", "A", "P"],  // Student 1
// // // // // //   ["A", "P", "P", "P"],  // Student 2
// // // // // //   ["P", "P", "P", "A"]   // Student 3
// // // // // // ];

// // // // // // for (let i = 0; i < attendance.length; i++) {
// // // // // //   for (let j = 0; j < attendance[i].length; j++) {
// // // // // //     console.log(attendance[i][j] + " ");
// // // // // //   }
// // // // // //   console.log(); // move to next line after each student row
// // // // // // }

// // // // // let apiStatusGrid = [
// // // // //   [200, 201, 404],
// // // // //   [500, 200, 200],
// // // // //   [200, 403, 200]
// // // // // ];

// // // // // // for...of version
// // // // // // for (let row of apiStatusGrid) {
// // // // // //   for (let code of row) {
// // // // // //     console.log(code + " ");
// // // // // //   }
// // // // // //   console.log();
// // // // // // }

// // // // // // forEach version
// // // // // apiStatusGrid.forEach(row => {
// // // // //   row.forEach(code => console.log(code + " "));
// // // // //   console.log();
// // // // // });


// // // // let regressionSuite = [
// // // //   ["Login Suite",    20, 18],   // [suiteName, total, passed]
// // // //   ["Checkout Suite", 15, 10],
// // // //   ["Search Suite",   25, 25]
// // // // ];

// // // // for (let i = 0; i < regressionSuite.length; i++) {
// // // //   let [name, total, passed] = regressionSuite[i]; // destructuring a row
// // // //   let passRate = ((passed / total) * 100).toFixed(2);
// // // //   console.log(`${name}: ${passRate}% passed`);
// // // // }

// // // // let defects = [
// // // //   ["BUG-101", "Critical"],
// // // //   ["BUG-102", "Minor"],
// // // //   ["BUG-103", "Critical"],
// // // //   ["BUG-104", "Major"]
// // // // ];

// // // // let criticalBugs = [];
// // // // for (let row of defects) {
// // // //   if (row[1] === "Critical") {
// // // //     criticalBugs.push(row[0]);
// // // //   }
// // // // }
// // // // console.log(criticalBugs); // ["BUG-101", "BUG-103"]

// // // let marks = [
// // //   [85, 90, 78],
// // //   [60, 45, 70],
// // //   [95, 88, 92]
// // // ];

// // // let total = 0;

// // // for(let i=0;i<marks.length;i++){
// // //     for(j=0;j<marks[i].length;j++){
// // //         total = total + marks[i][j];
// // //     }
// // // }
// // // console.log("total =",total);


// // let durations = [
// //   [1200, 800, 950],
// //   [600, 2200, 700],
// //   [1100, 900, 500]
// // ];

// // let maxduration = durations[0][0];

// // for(let i = 0;i<durations.length;i++){
// //     for(let j=0;j<durations[i].length;j++){
// //         if(durations[i][j] >  maxduration){
// //             maxduration = durations[i][j];
// //         }
// //     }
// // }
// // console.log(maxduration);

// //Given the test status grid below, write code to count how many times "Fail" appears in the entire 2D array.
// let statusGrid = [
//   ["Pass", "Fail", "Pass"],
//   ["Fail", "Fail", "Pass"],
//   ["Pass", "Pass", "Fail"]
// ];

// let count = 0;
// for(i=0;i<statusGrid.length;i++){
//     for(j=0;j<statusGrid[i].length;j++){
//         if(statusGrid[i][j] === "Pass"){
//             count = count + 1;
//         }
//     }
// }
// console.log(count);

let testResult1 = { suite: "Login", status: "Pass" };
let testResult2 = testResult1;   // copies the REFERENCE, not the object


testResult2.status = "Fail";
console.log(testResult1.status);  // "Fail" -> same object in memory
console.log(testResult1 === testResult2); // true -> same reference

