// for of loop in js

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
    
// }

// const greeting = "Hello,World!" //greeting is an object 
// for (const greet of greeting) { // greet is iterator
//     console.log(`value of each word is ${greet}`);
//     if (greeting== "r") {
//         break;
        
//     }
    
    
// }
// console.log("loop exit");


// map in js it is also an object that hold key-value pair

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Arg' , "Argetina")
map.set('USA' , "United States Of America") //no duplicate values allowed in the map all the values are uniques


// console.log(map);

for (const [key,value] of map) {
    // console.log(key , ':-',value);
    
    
}


// for of loop in the object

const obje = {
    "game1" : "bgmi",
    "game2" : "pubg",
    "game3" : "Nfs",
}
console.log(obje);


for (const [key,value] of obje) {
    console.log(key, ':-', value);
    
    
}

// map is iterable but not the object
