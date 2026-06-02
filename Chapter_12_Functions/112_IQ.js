
let g_x = 10;

//Nested Scope | blocked scope

function outer(){
    let x = 20;

    function inner(){
        let y = 30;
        console.log(x);

        inner();
        console.log(y);


    }
}