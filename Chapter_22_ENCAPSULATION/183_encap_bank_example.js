class ICICI{
    #balance;

    constructor(name,balance){
        this.name = name;
        this.#balance = balance;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance,isCashier){
        if(isCashier){
            this.#balance = balance;
        }else{
            console.log("Not allowed");
        }
    }
}

let swapnil = new ICICI("Swapnil",100);
console.log(swapnil.getBalance());
swapnil.setBalance(80000,false);
console.log(swapnil.getBalance());
console.log("-------------------");
let swapnilfather = new ICICI("Swapnil",100);
console.log(swapnilfather.getBalance());
swapnilfather.setBalance(80000,true);
console.log(swapnilfather.getBalance());