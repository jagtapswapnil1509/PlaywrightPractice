interface APIResponse{
    body:string,
    headers?:object,
    responsetime?:number
}

//? - means of optional parameter

let response1:APIResponse={
    body:"Hi"
};

let response2:APIResponse={
    body:"Hello",
    headers:{},
    responsetime:400
};