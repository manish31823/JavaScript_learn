// Reduce function in js

//accumulator ,current value ,initial values
// we have give value to accumulator 
const array1 = [1,2,3]

//  const total = array1.reduce(function ( acc ,cv ) {
//     console.log(`$ accumulator :{acc} and Current value : ${cv}`);
    
//     return acc + cv
//  } ,0) // here 0 is the accumulator
//  console.log(total);
 

// const mytotal = array1.reduce(  (acc , cv )=> acc +cv ,0)
// console.log(mytotal);



//shopping card example in reduce


const shoppingcart = [
   {
      itemname : "js course",
      price : 3999
   },
   {
      itemname : "py course",
      price : 999
   },
   {
      itemname : "java course",
      price : 5999
   },
   {
      itemname : "full stack course",
      price : 19999
   }
]

 const payment = shoppingcart.reduce( (acc , item) => acc + item.price ,0)
console.log(payment);
