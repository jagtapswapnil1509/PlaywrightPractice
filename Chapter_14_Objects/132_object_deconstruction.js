
const user ={name:"swapnil",age:66,email:"ss@gmail.com"};

//Basic deconstruction
const {name,age} = user;

// console.log(name);
// console.log(age);

//renaming variables/renaming the object keys

const {name : username,age:userage} = user;
console.log(username);
console.log(userage);

//destructuring

const{email}= user;
console.log(email);

//default value 
// logic - first it will check the country value in object if it present than that value will be shown
// if the country value is not present in object then the assigned USA value will be provided
const{country = "USA"} = user;
console.log(country);
console.log(user);

//Nested object
const data = {
    user: {
        name: "John",
        address: {
            city: "NYC"
        }
    }
}

const{user:{address:{city}}} = data;
console.log(data.user.address.city);