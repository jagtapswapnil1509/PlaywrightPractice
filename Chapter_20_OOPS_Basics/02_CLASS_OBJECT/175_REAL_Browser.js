
class TestCase {

    constructor(name,status,priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display(){  // function within a class is called as method
        console.log(this.name+"->"+this.status+"->"+this.priority);
    }
}
// this is called as function... beacuse this is outside of class
function f1(){

}

const LoginTest  = new TestCase("Login Page","Pass","P0");
const Signup  = new TestCase("Signup Page","Fail","P1");

LoginTest.display();
Signup.display();

// function vs method
// method is a function but inside a class