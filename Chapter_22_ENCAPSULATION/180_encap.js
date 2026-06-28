class Bankbalance{

    #balance = 0;  // private field hidden from outside

    deposite(amount){
        if(amount>0){
            this.#balance += amount;  // this.#balance = this.#balance + amount;
        }
    }
    getBalance(){
        return this.#balance;
    }
}
const account = new Bankbalance();
account.deposite(200);
const bb = account.getBalance();
console.log(bb);
//console.log(account.balance); // undefined. in encapsulation direct access of private variable is not allowed.

