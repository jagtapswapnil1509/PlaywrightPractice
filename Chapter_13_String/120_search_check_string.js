//searching & checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes function
console.log(url.includes("staging"));
console.log(url.includes("production"));

//startwith and endswith functions
console.log(url.startsWith("https"));
console.log(url.startsWith("htt//"));
console.log(url.endsWith("true"));

//index of and last index of function
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nowhere"));
console.log(url.indexOf("x"));

//search function
console.log(url.search(/login/)); // regex

// /regex/ - this is concept of regular expression - these are the nothing but a pattern you can find it in string