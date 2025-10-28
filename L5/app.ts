// let userInput : unknown;
let userInput : any;
let userString : string;

userInput = 10;
userInput = "sirture";

// userString = userInput;

if(typeof userInput == "string"){
    userString = userInput;
}


/********************never return type */

function generateError(message : string, code : number): never{
    throw {message : message, code : code};
}

const res = generateError("Internal server error", 500);
console.log(res);