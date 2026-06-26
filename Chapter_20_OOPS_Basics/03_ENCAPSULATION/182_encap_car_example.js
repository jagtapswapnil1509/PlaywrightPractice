class car{
    #engine;
    constructor(name,engineName){
        this.name = name;
        this.#engine = engineName;
    }
    getEngine(){
        return this.#engine;
    }
    setEngine(nameEngine){
        this.#engine = nameEngine;
    }
}
const tesla = new car("Tesla","v8");
console.log(tesla.getEngine());
tesla.setEngine("v9");
console.log(tesla.getEngine());