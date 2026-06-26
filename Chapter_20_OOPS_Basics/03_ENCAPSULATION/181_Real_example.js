
class Person {
    #child1;
    #child2;

    constructor(name,ch1,ch2){
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getchild1(){
        return this.#child1;
    }

    setchild1(changed_name){
        this.#child1 = changed_name;
    }
}
let p = new Person("Swapnil","Shrinu","Doll");
console.log(p.name);
//console.log(p.child1); // will show the undefined error message
console.log(p.getchild1());
p.setchild1("shreenay");
console.log(p.getchild1());