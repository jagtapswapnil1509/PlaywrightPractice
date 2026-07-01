interface TestHook{
    (testName:string):void;
}

let beforeEachHook : TestHook = function (testName :string) : void {
    console.log("[Before ] setting up:"+testName);
}

let afterEachHook : TestHook = function (testName :string) : void {
    console.log("[After] Tearing down:"+testName);
}

interface TestCase{
    id:number;
    name:string;
    status:string;
    duration:number;
}

beforeEachHook("Login Test");

let test1:TestCase ={
    id:1,
    name:"login with valid credenatils",
    status :"Pass",
    duration : 6000
};

console.log("TC-"+test1.id + ":"+test1.name+"->"+test1.status+":"+test1.duration);

afterEachHook("Login Test");