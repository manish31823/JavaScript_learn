// Global and local scope in js
// scope keyword
let a = 10
const b = 20 ///global scope
var c = 30


if (true) {
    let a = 100
    const b = 200 //local scope or block scope
    var c = 300 // var always delclare its inner scope not to use var mostly avoid of block scope
    // console.log("Inner :",a); //if we print here it will print inner 100 and outside 10
    
}


// console.log(a)
// console.log(b)
// console.log(c)
 

// what is nested scope?

function one(){
   const username = "Manish"
    

    function two(){
       const website = "youtube" //kind of closure of nested function
       console.log(username);
//function declaration to make an another call stack       
    }
    // console.log(website); //throw an refrence error

    two()
    
}
one()
