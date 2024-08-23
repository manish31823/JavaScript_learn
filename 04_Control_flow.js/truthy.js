// truthy-falsy value
const useremail = []
if (useremail) {
    console.log("user allow to log in");
    
    
}else{
    // console.log("user allow to  not log in");

}


// falsy values example
// false , 0 ,-0 ,BigInt 0n , null ,undefined ,NAN

// truthy value (string ke under kuch v likhenge ho wo truthy value hongi)
// "0" , 'false' " " , [  ], { } , function(){}


// Nullish coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 80 //ony it take of it first number
// val1 = null ?? 100 ?? null ?? 20 it will print the first no of its value

// console.log(val1);


// Ternary operator 
// condition ? true: false
const tea = 100
tea <= 70 ? console.log("nooooo") : console.log("yessSsh");


