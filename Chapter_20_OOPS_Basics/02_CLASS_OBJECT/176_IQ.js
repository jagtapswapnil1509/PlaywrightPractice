class Browser{
    // Parameterise constructor (arguments)
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser(){
        console.log("Starting a browser");
    }
    closeBrowser(){
        console.log("starting a browser");
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("firefox");

console.log(chrome.isOpen);