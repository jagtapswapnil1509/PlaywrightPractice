
// when step 2 depends on the step 1 result , you must run theme sequentially

// Step 1 -> step 2

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name,"200 Okay");
        },4000);
    })
}

async function sqTest(){
    let start = Date.now();

    console.log("staring the test");

    let r1 = await apiCall("Login Test");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time:-" + (Date.now() - start) + "ms");
    
}

sqTest();