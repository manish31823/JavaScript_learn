//---------------Number in js---------------//
const score = 500
console.log(score);

// // // for get the number datatype
const balance = new Number(725)
console.log(balance);// here it tell it is a number specially cast it is a number
//It is define the new object

console.log(balance.toString().length);
console.log(balance.toFixed(3));

// //precision js
// const otherbalance = 11135.672
// console.log(otherbalance.toPrecision(4));

// //locale strings
const countdown = 100000000
console.log(countdown.toLocaleString('en-IN'));





//------------Maths in js------------------//
console.log(Math);
console.log(Math.abs(-62));
console.log(Math.round(5.9));
console.log(Math.ceil(3.7));
console.log(Math.floor(8.6));// bottom number 8
console.log(Math.min(125,65,87,98,30))
console.log(Math.max(25,65,87,98,30))


// //Important maths library random
// console.log(Math.random());// It also display diffrent number in js
// // and its usually contain the number betwwn 0 and 1
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);


//one question on random and floor 
const min = 20
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min)





