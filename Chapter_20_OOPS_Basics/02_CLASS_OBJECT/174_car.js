class car {
    // remember class concept with CAB keyword 
    //constructor
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }
    // Attriute
    // Behaviour
    drive() {
        console.log("i am driving", this.name);
    }
}

const tesla = new car("model s");
tesla.drive();

const i10 = new car("grand i10");
i10.drive();