
let str = " Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL","PASS"));
console.log(msg.replaceAll("FAIL","PASS"));
console.log(msg.replace(/FAIL/,"PASS"));  // with regex

//concatination
"hello" + " " + "hello";
"hello".concat(" " + "hello");
`"hello" + " " + "hello"`;


let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/,"qa"));

let r = "Pass,fail,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2025","03","11"];
console.log(parts.join("-"));