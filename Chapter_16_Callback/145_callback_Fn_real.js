
function cafe(itemName,whentabelisready){
    console.log("finding tabel------1");
    console.log("finding tabel------2");
    console.log("finding tabel------3");
    console.log(itemName);
    whentabelisready();
}

function whentabelisready(){
    console.log("call me on 777868");
}
//first way
cafe("pizza",whentabelisready);
//second way
cafe("Burger",function(){
    console.log("call me on 35454");
});
//third way
cafe("Momos",() => {
    console.log("call me on 555555");
});