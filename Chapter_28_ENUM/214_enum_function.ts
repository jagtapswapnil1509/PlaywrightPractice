enum Browser {
    chrome = "chromium",
    firefox = "firefox",
    safari = "safari",
    edge = "Edge"
}

function launchbrowser(browser : Browser) : void {
    switch(browser){
        case Browser.chrome:
            console.log("Launching chromium");
            break;
        case Browser.firefox:
            console.log("Launching Firefox");
            break;
    }
}

launchbrowser(Browser.chrome);