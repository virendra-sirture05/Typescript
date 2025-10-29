console.log('Type guards');
// // 1.
// type combinable = string | number;
// type numeric = string | number;
// type universal = combinable & numeric;
// function add(a : combinable, b : combinable){
//     // add type guards
//     if(typeof a == "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// console.log(add(30,30));
// console.log(add("30",30));
// 2.
// type admin = {
//     name : string;
//     privilage : string[];
// }
// type employee = {
//     name : string;
//     startDate : Date;
// }
// type elevatedEmployee = admin & employee;
// type unknownEmployee = admin | employee;
// const emp1 : elevatedEmployee = {
//     name : "virendra sirture",
//     privilage : ["create server"],
//     startDate : new Date
// }
// function printEmployeeInformation (emp : unknownEmployee){
//     console.log(emp.name);
//     // console.log("Priviliges : ", emp.privilages);
//     // start adding type guards
//     // if (typeof emp === "object") { /// wrong code
//     //     console.log(emp.privilages);
//     // }
//     if("privilage" in emp){
//         console.log(emp.privilage);
//     }
//     if("startDate" in emp){
//         console.log(emp.startDate);
//     }
// }
// printEmployeeInformation(emp1);
// printEmployeeInformation({name: "amans",startDate:new Date})
// .3  Type guards in class
// class Car{
//     drive(){
//         console.log("driving a car...");
//     }
// }
// class Truck{
//     drive(){
//         console.log("driving a truck");
//     }
//     loadCargo(amount : number){
//         console.log("loadCargo ", amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle : Vehicle){
//     vehicle.drive();
//     if("loadCargo" in vehicle){
//         vehicle.loadCargo(500);
//     }
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(600);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// type casting / type assertion
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
var userInput = document.getElementById('user-input');
userInput.value = "Hi, I am here";
