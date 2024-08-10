// There are two ways to declare an objects- Literals and constructor
// single ton only when we making it throug the constructor === object.create ///

// method 1 by the help of we declare the object literals
//use of symbol data type
const sym = Symbol("key 1")  


const user1 = {
    name : "Manish",
    "full name" : "Manish Chaudhary",
    [sym] : "key 1",
    age : "23",
    salary : 10000,
    email : "manish@google.com",
    city : "Delhi",
    isloggedin : "True",
    worked : "[Monday,Saturday ]"

}
// console.log(user1.city);
// console.log(user1.age);
// console.log(user1["full name"]);
// console.log(user1[sym]);

// change of the object values 
user1.email = "manish@amazon.com"// object freeze and chnage if the object values
//if we want to frreze any object we can use object.freeze
// Object.freeze(user1)
user1.email = "manish@phyhon.com"
// console.log(user1);


// js function
user1.greeting = function () {
    console.log("HEllo gm"); // simple values of return
}

user1.greeting2 = function () {
    console.log(`HEllo gm, ${this.name}`);// FOr geting the refrence of same object we use this------>
}
console.log(user1.greeting());
console.log(user1.greeting2());













