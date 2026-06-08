//traditional way to create object
let config2 = {
    browser="chrome",
    timeout=3000,
    testname="login test",
};

//alternate way to create object
let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.browser;
console.log(config);

if (config.browser === "chrome") {
    console.log("I will execute my test. ")
} else {
    console.log("I will not execute my test cases. ")
}