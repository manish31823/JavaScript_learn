// Dates in js
 
let myDate = new Date()//object creation
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let mycreatedDate = new Date ("8-7-2024")
// console.log(mycreatedDate.toLocaleString());


// //Timestamps in js
// // for design quiz ,polls
 let myTimeStamp =  Date.now()
// //  console.log(myTimeStamp);
//  console.log(mycreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());

// imp----- what is locale string 
// it is used for customation of date,timezone, everything

 
 
 
newDate.toLocaleString ('default',{
    weekDay : "long",
    timezone : ''
})
