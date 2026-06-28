class TestCase{
    execute(){
        console.log("Running generic test");
    }
}
class unitTest extends TestCase{
    execute(){
        super.execute();
        console.log("Running unit test - checking one function");
    }
}
class APITest extends TestCase{
    execute(){
        console.log("Running API Test - Sending HTTP Request");
    }
}
class E2ETest extends TestCase{
    execute(){
        console.log("Running E2E test - opening the browser");
    }
}
let tests = [new unitTest(),new APITest(),new E2ETest()];

tests.forEach(function (test){
    test.execute();
});