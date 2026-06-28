class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name+" is eating");
    }
    sleep(){
        console.log(this.name+" is sleeping");
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);  // it is used to call parent constrcutor
        this.breed = breed;
    }
    bark(){
        console.log(this.name+" is barking");
    }
}

let dog = new Dog("Rex","Labrodor");

dog.eat();
dog.sleep();
dog.bark();

console.log(dog.name);
console.log(dog.breed);

