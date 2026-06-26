
class BasePage {
    setup(){
        console.log("Base:Open Browser");
    }
}

class APIPage extends BasePage{
    // if the setup method is not available under the object 
    // created class file then the parent setup method will be called
    setup(){
        console.log("API Test:Open Browser");
    }
}

let test = new APIPage();
test.setup();