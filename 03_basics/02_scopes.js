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
    //    console.log(username);
//function declaration to make an another call stack       
    }
    // console.log(website); //throw an refrence error

    two()
    
}
one()


// in the if else function

if (true) {
    const username = "manish"
    if (username === "manish") {
        const website = " youtube" //scope acess
        // console.log(username+website);
        
        
    }
}

// intersting question  basic function
console.log(addone(5))
 function addone(num){
    return num + 1
    
 }


//  this is a function but also called expression of its variables----json,function
addtwo(5)
const addtwo = function(num){ //here function is declared and holded
    return num + 2
}


 