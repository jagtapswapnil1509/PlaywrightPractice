//template literals

let firstname ="Swaaaapnil";
let fullname = `My name is ${firstname}`;
console.log(fullname); 

let  env = "prod";
env = "dev";
const  userid = 12345;
const apiEndpoint = `https://${env}.api.example.com/users/${userid}`;
console.log(apiEndpoint);

//playwright
const rowIndex = 1;
const columnName = "Name";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).click();  

//Logs
const testname = "Login Test";
const status = "Passed";
console.log(`Test: ${testname} - Status: ${status}`);

//screenshot
const testcase = "Search Functionality";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testcase}_${timestamp}.png` });