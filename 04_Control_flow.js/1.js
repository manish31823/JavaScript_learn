// if statement 
// < , > , <= ,>= , == , !=, !== , ===

const isLoggedIn = true
const temp = 58
if (temp < 50) {
    console.log("temperature is good");
    
}else{
    console.log("temperature is hot");
    
}

const score = 200
if (score > 100) {
    // beacuse of a global scope we can define global scope of the variable
  let power = "fly"
    console.log(`use power : ${power}`);
    
    
}
console.log(`use power : ${power}`);

// shorthand notation(implict scope)
const balance = 5000
// if (balance>2000)    console.log("passed");
if (balance < 3000) {
    console.log("less than 3000");
    
    
}else if(balance< 3500){
    console.log("less than 3500");
    
}else if(balance< 4500){
    console.log("less than 4500");
    
}else{
    console.log("less than 6000");
    

// }
    
 // real life example checking of the multiple statement
const isloggedin = true
const debitcard = true
const isloogedFromGoogle = true
const isloogedFromGmail = true
if (isloggedin && debitcard) {
    console.log("Allow to shopping");
    
    
}

if (isloogedFromGoogle  || isloogedFromGmail) {
    // console.log("user logged in");
    
}
