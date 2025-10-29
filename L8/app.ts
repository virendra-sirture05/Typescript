console.log('Generics');

// type person = {
//     name : string;
//     age : number;
// }

// const boy : person = {
//     name : "virendra",
//     age : 22
// }

// const fruits : Array<person> = [{name : "vivek", age : 21}];
// // fruits.push("mango");

// console.log(fruits);


//eg2

// // function merge<t, u, v>(objA : t, objB : u, objC : v){
// //     return {...objA, ...objB, objC};
// // }

// // console.log(merge({name : "virendra"}, {role : "software eng"}, {age : 23}));

// function merge<T, U, V>(objA: T, objB: U, objC: V) {
//     return { ...objA, ...objB, ...objC };
// }
// const res = merge({ name: "patel" }, { role: "Software engineer" }, { id: "d1" });
// console.log(res);











// 2. Generics constraints

// function printInfo<T extends string, U extends number, V extends boolean>(
//     key : T, value : U, isActive : V
// ) : {key: T, value : U, isActive : V}{
//     return {key, value, isActive};
}

// function createObject<T extends string, U extends number, V extends boolean>(
//     key: T,
//     value: U,
//     isActive: V
// ): { key: T, value: U, isActive: V } {
//     return { key, value, isActive }
// }

// const obj = createObject("age", 25, true);
// console.log(printInfo("vir", 22, true));









// 3. Generics interface

// interface Box<T>{
//     value : T
// };

// const numberBox : Box<number> = {value : 200};
// const stringBox : Box<string> = {value : "asdf"};
// const stringObj : Box<object> = {value : { age : 22}};
// console.log(numberBox);
// console.log(stringBox);
// console.log(stringObj);


// generic default

// interface User <T = string>{
//     data : T;
//     status : number;
// }

// interface person {
//     name : string;
//     age : number;
// }

// const box1 : User = {data: "succees", status : 200};
// console.log(box1);
// const box2 : User<person> = {data:{name : "vir", age : 22}, status : 202};
// console.log(box2);









// // 4. Generics with class

// class Container<T>{
//     content : T;
//     constructor(content : T){
//         this.content = content;
//     }
//     getContent(): T{
//         return this.content;
//     }
// }

// const obj = new Container<String>("hello");
// console.log(obj.getContent());
// const obj2 = new Container<number>(123);
// console.log(obj2.getContent());








// generics with Array

// function getFirst<T>(arr : T[]): T{
//     return arr[0];
// }

// console.log(getFirst<string>(["virendra","sjfljf"]));
// console.log(getFirst<number>([12,22]));





// generics with keyof

// const Person = {key:"Mernstack"}
// console.log(Person["key"]);

// function getProperty(obj : object, key : string){
//     return obj[key]
// }
// const res1 = getProperty({}, "name");
// console.log(res1);



function getProperty<T extends object, K extends keyof T>(obj : T , key : K) : T[K] {
    return obj[key]
}

const person = {name:"Patel", age:21};
// const person2 = {fullname:"Patel", salary:21};
const name1 = getProperty(person, "name");
// const age = getProperty(person2, "age");
console.log(name1);