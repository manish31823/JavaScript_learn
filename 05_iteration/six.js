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


// for each loop
// const number  = [1,2,3,4,5,6,7,8,9,10]
// const numbers = []
// number.forEach((nums)=> {
//     if (nums>5 ) {
//         numbers.push(nums)
        
//     }

// })
// console.log(numbers);



// Example of using filter method 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks = books.filter ( (bk)=> bk.genre === 'History') //bk is a call stack it couldn't be anything
let userbooks1 = books.filter( (bk)=>{ 
  return bk.publish>=1995 && bk.genre === "History"}) //here we are return using the scope so we should use return keyword in these
console.log(userbooks1);

