// Reduce function in js

//accumulator ,current value ,initial values

const array1 = [1,2,3]

 const total = array1.reduce(function ( acc ,cv ) {
    console.log(`$ accumulator :{acc} and Current value : ${cv}`);
    
    return acc + cv
 } ,0) // here 0 is the accumulator
 console.log(total);
 