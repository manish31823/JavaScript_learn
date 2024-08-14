// // creating a function
function Hello (){
    // console.log("hello Function");
    
}
// _________________________________.........> basic structure of creating an function
Hello()


//add of two number 

function add (number1 ,number2){//this is parameter
//    console.log( number1+number2);
    
}

// we can also store the variable into functions
const result = add (13,7)// argument and function call
// console.log("Result : ", result);

 


// we can also store the variable into functions


//function of loginuser
// function userlogin(username) {
//     return `${username} just come here 10min ago`

// }
// console.log(userlogin("Manish"));//jab hum function m kuch pass nhi karte h tab ahta h undefined 


function userlogin(username) {
    if (username === undefinded) {
        console.log("enter your name");
        
        
    }
    return `${username} just come here 10min ago`

}
// console.log(userlogin());

// function of shopping price
function calculateprice(val1, val2 ,...num1){
    // rest operator...//
    return num1
}
// console.log( calculateprice(200,400,600,800));


// object
const user ={
    username : "ankki",
    price : 1000,
    place  : "Azberbaijan"

}
// how to pass object in the funtion
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   //case -1 

}
// handleobject(user)
handleobject({
    username : "mani",  // case -2
    price : 99
})

// passing of a array in the functions
const myarray = [20,30,40,50,60]

function secondvalue (getarray){// here we give any name in the function and case-1
    return getarray[7]

}
console.log(secondvalue(myarray));

handleobject({
    username : "mani",  // case -2
    price : 99
})







 