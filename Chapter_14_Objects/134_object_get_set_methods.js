//objects - JS {}
//classes and Object


const user = {
    firstName:"Swapnil",
    lastName:"Jagtap",
    get fullName(){
        return this.firstName + this.lastName;
    },
    set fullName(value){
        [this.firstName , this.lastName] = value.split(" ");
        
    }
}
// this. it means current value in the object.

console.log(user.fullName);
user.fullName="Amit sharma";
console.log(user.fullName);
