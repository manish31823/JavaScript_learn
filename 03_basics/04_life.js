// Immediately Invoked Function Expression (IIFE) Basically to add ()definition and ()exceution call
// global scope ke pollution hoti hai bar bar to us global scope declaration ko hatane k liye iife ko use karte h
//  (function info(){
//     console.log(`DB CONNECTED`);
    
//  })()

//  just two one parenthesis before function and on end parenthesis end of function ()
  (function info(){
    console.log(`DB CONNECTED TWO`);
    
 })();

//  what is iife
// (Function definition) (Excuetion call)

// iife as an arrow function
// context rokne k liye ;
( function style(name) { 
    console.log(`DB CONNECTED THREE ${name}`);
    
})('manish')