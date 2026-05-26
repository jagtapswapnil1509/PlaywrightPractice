
let browsers = ["firfox", "chrome", "Opera", "Safari", "Edge"];
console.log(browsers.length);
console.log(browsers);

browsers.pop();
console.log(browsers);

let removed = browsers.shift();
console.log(browsers);
console.log(removed);

for (i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "Opera") {
        console.log("Opera is removed from selenium");
    }
}