interface Point{
    readonly x:number;
    readonly y:number;
}

const point:Point ={x:10,y:20};

//point.x = 6; // this will be not allowed

// readonly array
interface Data{
    readonly items :   readonly number[];
}