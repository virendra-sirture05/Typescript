console.log("object, Array, tuple, enum");

// object
// const person : {
//     name : string, 
//     age : number,
//     xyx : {
//         address : string
//     }
// } = {
//     name : "Virendra",
//     age : 22,
//     xyx:{
//         address : "xyx adressssssss"
//     }
// }
// console.log(person);







// Array
// const person :{
//     name : string,
//     age : number,
//     skills : string[]
// } = {
//     name : "virendra",
//     age : 22,
//     skills : ["React", "Node"]
// }
// console.log(person);

// let favouriteLangauge : string[];
// favouriteLangauge = ["react", "node"];
// console.log(favouriteLangauge);

// let number : number[];
// number = [10,20,3];

// let randomThing : any[]; // lost ts powerfull
// randomThing = [10, "abc", true];
// console.log(randomThing);






/************************tuple************ */

// const person :{
//     name : string,
//     age :  number,
//     product : [number, string];  // fixed array of two type
// }={
//     name : "virendra",
//     age : 23,
//     product : [10, "macbook"]
// }

// console.log(person);









/*************************enum*************8 */


enum Role {admin, author, user};

const person = {
    name : "virendra",
    age : 22,
    role : Role.author
}

if(person.role == Role.admin){
    console.log("admin");
}
else if(person.role == Role.author) {
    console.log("author");
}