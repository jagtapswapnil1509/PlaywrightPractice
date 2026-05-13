console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;

{
    //TDZ for 'score' starts here
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    //score = 200; // ReferenceError: Cannot access 'score' before initialization
    //typeof score; // ReferenceError: Cannot access 'score' before initialization
    //TDZ for 'score' ends here
    let score = 200; //Declaration reached, TDZ for 'score' ends here
    console.log(score); // safe to access 'score' here, output: 200




}