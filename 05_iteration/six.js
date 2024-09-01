// const code = ["js","py","c++","java","django"]

//  const values = code.forEach( (items) =>{
//     // console.log(items);
//     return items
// })
// console.log(values);//returned in undefined 

// js filter method is given call back fyunction then given an condition

// const mynumber = [1,2,3,4,5,6,7,8,9,10]

//  const newnum = mynumber.filter( (nums)=> nums >4)
// console.log(newnum);


// for each
const number  = [1,2,3,4,5,6,7,8,9,10]
const numbers = []
number.forEach((nums)=> {
    if (nums>5 ) {
        numbers.push(nums)
        
    }

})
console.log(numbers);
