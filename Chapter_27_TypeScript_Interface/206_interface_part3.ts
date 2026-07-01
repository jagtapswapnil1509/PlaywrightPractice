
interface calculator {
    add(a:number,b:number):number;
    subtract(a:number,b:number):number;
    multiply:(a:number,b:number) => number; // alternate syntax
}

const calc:calculator={
    add:(a,b) => a + b,
    subtract:(a,b) => a-b,
    multiply:(a,b) => a *b
};

console.log(calc);
console.log(calc.add(9,7));
console.log(calc.subtract(9,7));
console.log(calc.multiply(9,7));

