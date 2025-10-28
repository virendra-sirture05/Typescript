
// union -> | pipe in typescript

// function combine(num1 : number | string, num2 : number | string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
        
//         return num1 + num2;
//     }
//     else return num1.toString() + num2.toString();
// }

// console.log(combine(10,20));;
// console.log(combine("Virendra", " sirture"));








// Literals types

// function combine(num1: number | string, num2 : number | string, conversionType: "as-number" | "as-string"){
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType == "as-number"){
//         return +num1 + +num2;
//     }
//     else return num1.toString() + num2.toString();
// }

// console.log(combine(20,20, "as-number"));
// console.log(combine("vir", " sir", "as-string"));










// Type Alias / CUSTOM TYPES

// type combinable =  number | string
// type conversionType = "as-number" | "as-string"

// function combine(num1: combinable, num2 : combinable, conversionType : conversionType ){
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType == "as-number"){
//         return +num1 + +num2;
//     }
//     else return num1.toString() + num2.toString();
// }

// console.log(combine(20,20, "as-number"));
// console.log(combine("vir", " sir", "as-string"));



type User = {
    name : string,
    age : number,
}

const user : User ={
    name : "virendra",
    age : 20
}

console.log(user);

function func (user:User){
    console.log(user.age);
}
func(user);