let testMetrix = [
    ["login Test", "Pass", 200],
    ["checkout", "fail", 404],
    ["search", "Pass", 180]
];

// How many test cases have we executed?
// How many test cases are pass?
// what is the status code you got for the failed test case

for (let i = 0; i < testMetrix.length; i++) {
    for (let j = 0; j < testMetrix[i].length; j++) {
        console.log(testMetrix[i][j]);
    }
    console.log();
}

for (let row of testMetrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();
}

//for each
testMetrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " ")
    );
    console.log();
})