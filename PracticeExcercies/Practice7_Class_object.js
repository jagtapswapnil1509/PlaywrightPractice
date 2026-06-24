class calculator{

    constructor(num1 , num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    substract(){
        return this.num1-this.num2;
    }
    modules(){
        return this.num1%2;
    }

    division(){
        return this.num1/this.num2;
    }

    multiple(){
        return this.num1*this.num2;
    }
}
let l1 = new calculator(7,3);
const subv = l1.substract();
console.log(subv);
const mod = l1.modules();
console.log(mod);
const div = l1.division();
console.log(div);
const mul = l1.multiple();
console.log(mul);