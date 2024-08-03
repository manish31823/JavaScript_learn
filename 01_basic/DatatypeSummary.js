// //DataTypes In js (Also Called Call By value.)

// // Primitive Datatype(7) - String , Number , Null , Undefined , Bigint , Boolean , Symbol

// // const score: = 100 //assign the value in TypeScript

// const score = 100 //number
// const scoreValue = 100.3355
// const isLoggedIn = false// Boolean 

// // const temp = null //assign the null value completely empty

// // let email; //It is an undefined value 
// // const person = "manish" // String

// // // // AsSign the symbol in js
//  const id = Symbol('123')
//  const anotherid = Symbol('123')
// console.log(id===anotherid);

// // // //Big int
// // // const bignumber = 254644556454554n

// // // //Non Primitive Datatype = Call By Refrence
// // // //Array , Objects , Functions


// // //Assign the array
// const crickter = ["Dhoni","Kolhi","ROhit","Jadeja"]
// console.log(crickter);

// //Assign the objcts in js
// let myobj = {
//     name : "manish",   // It is written in key value of pairs //
//     age :   23,
//     salary : 100000,
//     city : "delhi",


// // };
// // console.log(myobj);


// //Assign the Function
// // const myfunction = function(){
// //     console.log("Hello MAnish");

// };

// know the types of datatype
// console.log(typeof myfunction);




//Stack And Heap Memory In js
// stack is primitive data type and heap memory is non primitive datatype

// let myname = "manish chaudhary"

// let anothername = myname
// anothername = "Golu"

// console.log(myname);
// console.log(anothername);

// object in js

let user1 = {
    name : "golu",
    email : "golu@gmail.com",
    upiid : "2251@sbi",

}

let user2 = user1

user2.email = "manish@google.com"
console.log(user1.email);
console.log(user2.email);// same heap of memory will be used here.


















