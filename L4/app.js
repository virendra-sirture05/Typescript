console.log("function return type");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(20, 50));
function greet(name) {
    console.log("Hi, I am ".concat(name));
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
var combineFunction;
combineFunction = add;
console.log(combineFunction(30, 30));
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandle(10, 30, function (result) {
    console.log(result);
});
