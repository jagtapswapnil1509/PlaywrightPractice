
class BaseTest{
    setup(){
        console.log("Base:open browser");
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("API Test:open browser");
    }
}

let test = new APITest;  // whoever object is created, it will be called
test.setup();

let test2 = new BaseTest;  // whoever object is created, it will be called
test2.setup();