// let is block scoped.

let x = "global";

if (true) {
    // TDZ for 'x' starts here
    //console.log(x); // ReferenceError: global will not come.

    let x = "block";
    console.log(x); // Output: "block"
}