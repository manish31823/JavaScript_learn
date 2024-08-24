// for loop

// for (let j = 0; j <=10; j++) {
//     const element = j; // loop and if condtional
//     if (element==6) {
//         console.log("7 is the best number");
        
        
//     }
//     console.log(element);
    
// }
// // console.log(element);


// loop * loop and printing table
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
// //    console.log(`Inner loop value ${j} and inner loop is ${i}`);
//     console.log(i + '*' + j + '=' + i*j);
    
   
        
//     }
    
// }


// for declaring an array in the loop
let myarray = ["dhoni" , "kolhi" , "rohit" , "jadeja"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}


// break and contiue statement
// break
for (let i = 1; i <=20; i++) { //here we can detect or check in any number with the break keyword
    if (i==6) {
        console.log("number Detected 6");
        break
        
        
    }
  console.log(`value of the i : ${i}`);
  
    
}



// continue statement
for (let i = 1; i <=20; i++) { //here we can detect or check in any number with the break keyword
    if (i==6) {
        console.log("number Detected 6");
        continue
        
        
    }
  console.log(`value of the i : ${i}`);
  
    
}