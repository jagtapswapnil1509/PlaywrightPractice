//Leap year check
// Rule
// Divisible by 4 and not divisible by 100 - leep year
// Or divisible by 400 - leap year
// else - not leap year

let year = 2021
if ((year % 4 === 0 && year %100 !== 0) || year % 400 === 0) {
    console.log("this is leap year");
} else {
    console.log("this is not leap year");
}