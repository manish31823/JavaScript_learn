// //string declaration 1 way 
// const name = "manish"
// const age = 23
// const repocount = 14
// console.log(name  + age + repocount + "value"); //old method to concatencate the strings


// console.log(`Hello my name is ${name } i am ${age} and my repo count is ${repocount}`); // new method of concatenate the string with the string interpolstion it will make placeholder and can be directly inject

// // Another way of declaring the String by the help of the new keyword by giving their objects to there constructor
 const bgminame = new String('Daddycool')
// console.log(bgminame.charAt(6));
// console.log(bgminame.length);
// console.log(bgminame.toUpperCase());
// console.log(bgminame.indexOf('y'));


// substring---
 const newstring = bgminame.substring(1,3)
 console.log(newstring);


 
 // trim Remove whitespaces inside a string in javascript
const newstringone = "             golu              "
console.log(newstringone);
console.log(newstringone.trim());

//replace --- includes -- split
const url = "https://manish.com/manish%20choudhary"
console.log(url.replace('%20', '@40'));

console.log(url.includes('king ji'));

console.log(bgminame.split('-'));



























