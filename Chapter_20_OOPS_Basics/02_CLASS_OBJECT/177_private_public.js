// Private field (#) - hidden data
// Public field

class Credentials {

    #apikey; // Private variables are not allowed to use outside
    user;

    constructor(user,key){
        this.user = user;
        this.#apikey = key;
        console.log("constructor is called");
    }

    // custom made function
    getAuthHeader(){
        return "Bearer->" + this.#apikey;
    }
}

let cred = new Credentials("admin","secret_Key_1234");
console.log(cred.user);
//console.log(cred.apiKey); // shows undefined error
//console.log(cred.#apikey); // this shows error

const token = cred.getAuthHeader();
console.log(token);