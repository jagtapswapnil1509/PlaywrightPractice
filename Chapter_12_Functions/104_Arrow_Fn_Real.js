
// This is an normal function

function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}

// This is function with expression

const validateStatusCode_exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}


// This is Array function 

const validateStatusCode_Ar = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");
    }
}
