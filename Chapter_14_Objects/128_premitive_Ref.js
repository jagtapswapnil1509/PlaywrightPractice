
//premitive vs Referrance type

let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);

//objects -copied by referance ,call by referance
//referance - object , array , function

let obj1={val:11};
let obj2 = obj1;
obj2.val=88;
console.log(obj1.val);
console.log(obj2.val);
