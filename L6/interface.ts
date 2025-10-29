console.log("I am interface");  

// Interface

// interface person {
//     name : string;
//     age : number;
//     greet(text : string): void;
// }

// let user : person;

// user ={
//     name : "virendra",
//     age : 22,
//     greet(text: string): void{
//         console.log(text);
//     }
// }
// console.log(user);

// user.greet("Hi bro")





// interface greetable{
//     name : string;
//     greet(text : string) : void;
// }

// class person implements greetable{
//     name : string;
//     constructor(n : string){
//         this.name = n;
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`);
//     }
// }

// const user = new person("aman");
// user.greet("Hello ");












// readonly

// interface greetable{
//     readonly name : string;
//     greet(text: string): void;
// }

// class person implements greetable{
//     name : string;
//     constructor(n : string){
//         this.name  = n;
//     }
//     greet(text: string): void {
//         console.log(`${this.name} ${text}`);
//     }
// }

// let user : greetable;
// user = new person("aa ron");
// // user.name = "jjdsfjsf" // error











// // extending interface

// interface Named{
//     name : string;
// }
// interface Greetable extends Named{
//     greet(text : string): void;
// }

// class person implements Greetable {
//     name : string;
//     constructor(n: string){
//         this.name = n;
//     }
//     greet(text: string): void {
//         console.log(`${this.name} ${text}`);
//     }
// }

// let user1 : Greetable;
// user1 = new person("de nice");
// console.log(user1);
// user1.greet("fkjf")







// // type add = (a : number, b : number) => number;

// interface add{
//     (a: number, b : number) : number;
// }

// let func : add;

// func = (a : number, b : number){
//     return a + b;
// }
// console.log(func(10,20));



// ? optional


interface Named{
    name : string;
    age ?: number
}
class person implements Named{
    name: string;
    constructor(n : string){
        this.name = n;
    }
}
