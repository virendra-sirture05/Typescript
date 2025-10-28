// let userInput : unknown;
var userInput;
var userString;
userInput = 10;
userInput = "sirture";
// userString = userInput;
if (typeof userInput == "string") {
    userString = userInput;
}
/********************never return type */
function generateError(message, code) {
    throw { message: message, code: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
