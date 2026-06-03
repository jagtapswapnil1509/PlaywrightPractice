
let str = "Login_Test_Pass_001";
//slice (start,end) - negative index supported

console.log(str.slice(0,5)); // output - Login
console.log(str.slice(11));
console.log(str.slice());

let testnumber = str.slice(-3);
console.log(testnumber);

//substring (start,end) - no negative index (treats as 0)
console.log(str.substring(0,5));
console.log(str.substring(-3)); // print complete string
