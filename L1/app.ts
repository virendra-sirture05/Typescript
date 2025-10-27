// console.log('hello world in typescript');
// number, string, boolean

function addd(num1 : number, num2 : number, isHere : boolean, printString : string){
    if(isHere)
     console.log(`${printString} ${num1 + num2}`);
}

const a = 20;
const b = 30;
const isHere = true;
const printString = "sum of two number is : "
const ans = addd(a, b, isHere, printString);
console.log(ans);