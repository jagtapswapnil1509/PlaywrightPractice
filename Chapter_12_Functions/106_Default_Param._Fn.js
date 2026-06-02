
function retry (testName,maxRetry=3,delay=1000){
    console.log(`Retrying ${testName} up to ${maxRetry} times , ${delay} apart`);
}

retry("Llogin page");
retry("Registration page",5,3000);