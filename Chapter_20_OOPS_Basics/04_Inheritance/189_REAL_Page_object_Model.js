class BasePage{
    verify(){
        console.log("Verifying the base page");
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("Verify : Username field exists");
        console.log("Verify : password field exists");
        console.log("Verify : login button exists");
    }
}
class DashboardPage extends BasePage{
    verify(){
        console.log("Verify : welcome message show");
        console.log("Verify : sidebar menu shows");
    }
}
class CartPage extends BasePage{
    verify(){
        console.log("Verify : cart item displays");
        console.log("Verify : total price is correct");
    }
}

let tests = [new LoginPage(),new DashboardPage(),new CartPage()];

tests.forEach(function (test){
    test.verify();
    console.log("------------");
});