// Grand father -> father -> Son
// Basepage -> Auth page -> Admin page

class BasePage{
    constructor(name){
        this.name = name;
    }
    open(){
        console.log("[open]" + this.name);
    }
}
class AuthPage extends BasePage{
    login(user){
        console.log("[Login]"+user);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("Admin Pannel");
    }
    manageUsers(){
        console.log("[Admin] managing the users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();