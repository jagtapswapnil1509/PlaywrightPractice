interface Exeutable {
    name :string;
    run():void ;
    getstatus() :string
};

class TestCase implements Exeutable {
    name :string
    constructor(name:string){
        this.name = name;
    }
    run():void{
        console.log("[run]"+this.name);
    }
    getstatus():string{
        return  "Pass";
    }
}

let tc = new TestCase("verify login page");
tc.run();