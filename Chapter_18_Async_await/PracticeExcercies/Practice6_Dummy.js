//ORIGINAL (var version):
for (var i = 1; i <= 3; i++) {
    console.log("Attempt:", i);
}
console.log("After loop, i =", i);   // leaks! what does this print?

for (let j = 1; j <= 3; j++) {
    console.log("Attempt:", j);
}
console.log("After loop, j =", j); 


let totalTests = 50;
 
Complete the blanks:
The KEYWORD is:    let
The IDENTIFIER is: total Test
The LITERAL is:    50
The OPERATOR is:   =
