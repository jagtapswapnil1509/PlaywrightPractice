
function print(){
    console.log("this is normal function is called");
}

function placeOrder(itemname,callback){
    console.log("Your order is placed " +itemname);
    callback();
}

//First way
placeOrder("burger",print);

// second way - passing anonomous function

placeOrder("Pizza",function(){
    console.log("i am calling anonomous functuon");
})

// third way - Arrow function

placeOrder("Sandwitch",() =>{
    console.log("i am calling arrow functuon");
})