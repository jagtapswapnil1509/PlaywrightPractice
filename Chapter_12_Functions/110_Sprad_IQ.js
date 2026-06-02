
function add(a,b,c){
    return a+b+c;
}

let num = [1,2,3];
const r = add(...num);
console.log(r);

let responseCode=[200,300,400];

function haserror(...code){
    return code.some(c=>c>=400);
}

let m = haserror(...responseCode);
console.log(m);
