
// when step 2 depends on the step 1 result , you must run theme sequentially

// Step 1 -> step 2

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name,"200 Okay");
        },4000);
    })
}

async function parallelTest(){
  
let[r1,r2,r3] = await Promise.allSettled([
    apiCall("Auth service"),
    apiCall("User account creation"),
    apiCall("Support Page API")
])

console.log(r1);
console.log(r2);
console.log(r3);
   
    
}

parallelTest();

//32.36