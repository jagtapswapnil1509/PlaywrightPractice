
const user ={
    name:"john",
    age:30,
    email:"ss@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Dynamic property update

const key = "age";
console.log(user[key]);

//adding/modifying property

user.city = "Pune";
user.age=33;

console.log(user);

let obj = {name:"login"};
console.log(Object.getOwnPropertyDescriptors(obj,"name"));