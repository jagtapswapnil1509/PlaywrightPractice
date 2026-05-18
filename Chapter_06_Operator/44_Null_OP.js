console.log (null >= 0);
console.log (null === 0);

// ?? nullish coalescing operator

let amul = null;
let milk_required = amul ?? "Chitale Milk";
console.log(milk_required);

let amul1 = "Amul Milk";
let milk_required1 = amul1 ?? "Chitale Milk";
console.log(milk_required1);