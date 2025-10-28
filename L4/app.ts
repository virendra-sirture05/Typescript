console.log("function return type");

function add(num1 : number, num2 : number): number{
    return num1 + num2;
}
console.log(add(20,50));


function greet(name : string): void{
    console.log(`Hi, I am ${name}`);
}

greet("vir");

// let combineFunction : Function;

// bad
// // combineFunction = 10; // invalid
// // combineFunction = function(){}; valid
// combineFunction = add; // valid
// // combineFunction = greet;
// console.log(combineFunction(1,2));


// Goot practice

let combineFunction : (a :number, b : number)=> number;

combineFunction = add;
console.log(combineFunction(30,30));


// funtion type and callback

type CB = (a:number) => void;

function addHandle (n1: number, n2 : number, cb : CB){
    let result = n1 + n2;
    cb(result);
}

addHandle(10,30,(result)=>{
    console.log(result);
})