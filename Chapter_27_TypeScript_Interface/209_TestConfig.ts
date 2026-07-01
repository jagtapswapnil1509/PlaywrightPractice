interface TestConfig{
    browser:string;
    headless:boolean;
    baseURL:string;
    timeout?:number;
    retry?:number
};

let ciconfig : TestConfig ={
    browser : "chrome",
    headless : true,
    baseURL : "https://staging.com"
};

let localconfig : TestConfig ={
    browser : "firefox",
    headless : false,
    baseURL : "https://loalhost:3000",
    timeout : 1000,
    retry : 3
};

console.log ("CI:", ciconfig.browser , "| timeout : ",ciconfig.timeout);
console.log ("local :", localconfig.browser , "| timeout : ",localconfig.timeout);