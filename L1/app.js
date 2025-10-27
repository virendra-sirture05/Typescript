console.log('hello world in typescript');
function addd(num1, num2, isHere, printString) {
    if (isHere)
        console.log("".concat(printString, " ").concat(num1 + num2));
}
var a = 20;
var b = 30;
var isHere = true;
var printString = "sum of two number is : ";
var ans = addd(a, b, isHere, printString);
console.log(ans);
