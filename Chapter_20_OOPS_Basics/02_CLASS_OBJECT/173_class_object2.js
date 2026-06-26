class Person{

    //constructor
    constructor(){
        console.log("I will be created when object is created");
    }

   //Attribute
    name;
    email;
    salary;
    address;

    //Behaviour
    sleep(){}
    eat(){}
    walk(){}
}

const obj_ref = new Person();
// let obj_ref = new Person(); -> it can be let keyword as well
// obj_ref -> this is called the object referance(address)
// new Person(); -> this is object with new keyword

console.log(obj_ref);