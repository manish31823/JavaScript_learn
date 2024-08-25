// // 1// define an array in js
// // const array = [20,30,40,50]
// // console.log(array);



// // creting an object in js
// const salesuser = {
//     username : "golu",
//     place : "new delhi",
//     age : 22,
//     salary : 10000
// }
// // console.log(salesuser);


// // creating an string in js
// const name1 = "Manish"
// // console.log(typeof "name");

// // what is js
// //  A js is a dynamcic programic language used to make interactivity of the web development

// // define varaible in js
// // variable is a conatiner used to store location there are two types of varaiable in js -local and global variable 
// // Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
// // After first letter we can use digits (0 to 9), for example value1.
// // JavaScript variables are case sensitive, for example x and X are different variables.

// //string interploation
// const name = "manish Chaudhary"
// age = 25

// //using string interploation with string literals
// // const hello = `Hello my name is ${name} and my age is ${age}.`
// // console.log(hello);

// // what is iife --immediate invoked function expressioon
// // Normal function
// function gobi(patta){
//     return patta
// }
// // gobi("aloo sabzi")
// // console.log(gobi);

// (function gobi(){
 
// })
// gobi()
// // console.log("gobi");



// //freeze of the object 
// const people = {
//     username : "golu",
//     age : 23,
//     city : "new delhi",
//     occupation : "unemployed"
// }
// console.log(people.age);

// iife in js Basically to add ()definition and ()exceution call

// (function data() {
//     console.log(`DB CONNECTED`);

// })();

(function data() {
    console.log(`DB CONNECTED`);
})();


//iife as arrow function in js
(function data(name) {
    console.log(`DB CONNECTED TWO ${name}`);
})('manish');

// object freeze in js

const obb = {
    name : "manish",
    age : 23,
    city : "new delhi",
    places : "azebrhajijan"
  
}

 Object.freeze (obb)
 obb.name = "rahul"
 console.log(obb);
 