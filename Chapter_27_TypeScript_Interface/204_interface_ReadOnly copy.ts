
interface APIResponse {
    readonly statuscode:number,
    body:string,
    headers?:object,
    responseTime?:number
}

//readonly - user cannot modify the readonly parameter value
// ? - means option - can be modify 

let response:APIResponse={
    statuscode:200,
    body:'{"user":"admin"}'
};

console.log("Status:",response.statuscode);
console.log("Body:",response.body);
console.log("headers:",response.headers);

//response.statuscode = 500;
response.body =  'jjjhjh';