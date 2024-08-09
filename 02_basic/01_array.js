 // Declaration of array

 const myarray = [0,1,2,3,4,5]
 console.log(myarray);
 
 const newarray = [0,2,5,566,35,true,'manish']
 console.log(newarray[2]);
 

 const crickter = ['kolhi','rohit','dhoni']
 console.log(crickter);


//  //Another way of declare array
 const newarray2 = new Array(2,7,8,3,17,30,80)//by the help of new keyword
 console.log(newarray2.push(33));
 console.log((newarray2[3]));//array index =3


// //array method
const myarray = [0,1,2,3,4,5]
myarray.push(170)
console.log(myarray);// this is push method means to add an element 

 
const myarray3 = [0,1,2,3,4,5,'golu']
myarray.pop(170)
console.log(myarray3);// this is pop method delete of the element

// // shift------unshit
// // unshift add the element of starting of an array
myarray3.unshift(10)
myarray3.shift()// same to same element
console.log(myarray3);

console.log(myarray3.includes(4));
console.log(myarray3.indexOf(77));

//imp method 
const newarrays = myarray3.join()
console.log(myarray3);
console.log(typeof myarray3);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);// Array Slice

// Create an Array
//splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);




