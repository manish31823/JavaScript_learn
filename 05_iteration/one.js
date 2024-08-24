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
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
//    console.log(`Inner loop value ${j} and inner loop is ${i}`);
    console.log(i + '*' + j + '=' + i*j);
    
   
        
    }
    
}