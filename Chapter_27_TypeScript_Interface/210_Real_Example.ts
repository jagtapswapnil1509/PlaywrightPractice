interface BasePage {
    url :string;
    title : String;
}
interface loginPage extends BasePage {
    usernameselector :string;
    passwordselctor :string;
    loginbuttonselector :string;    
}
interface FreetrailPage extends BasePage {
    usernameselector :string;
    submitbuttonselector :string;
}
let loginPage : loginPage ={
    url : "/login",
    title : "login page",
    usernameselector :"#username",
    passwordselctor :"#password",
    loginbuttonselector :"#login-btn"
}

let freetrailpage : FreetrailPage ={
    url : "/free-trail",
    title : "Free page",
    usernameselector :"#username",
    submitbuttonselector :"#submit-btn"
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameselector);

console.log(" ------- ");


console.log("URL:", freetrailpage.url);
console.log("Title:", freetrailpage.title);
console.log("Username field:", freetrailpage.usernameselector);