enum HTTPMethod {
    geto = "GET",
    posto = "POST",
    puto = "PUT",
    deleto = "DELETE"
}

function sendRequest(method:HTTPMethod,endpoint :string):void {
    console.log(method + "-"+endpoint+"-> 200 Ok");
}

sendRequest(HTTPMethod.geto,"/api/users");
sendRequest(HTTPMethod.posto,"/api/users2");
sendRequest(HTTPMethod.deleto,"/api/users1");