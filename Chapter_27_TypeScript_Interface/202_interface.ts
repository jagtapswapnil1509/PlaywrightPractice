
interface TestCase{
    id:number,
    name:string,
    status:string,
    duration:number
}

let test1:TestCase = {
    id:1,
    name:"Login with valid credentails",
    status:"Pass",
    duration:1500
}

console.log("TC-"+test1.id +":"+test1.name +"->"+test1.status +"For the duration:"+test1.duration);
