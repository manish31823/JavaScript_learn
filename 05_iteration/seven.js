//  map is a call back function
// what is a call back -opening or closing of a scope

const Numbers1 = [1,2,3,4,5,6,7,8,9,10]
//call back then take to Numbers

const newnum = Numbers.map( (num)  => { return num +10})
// console.log(newnum);


// chaining method = map-filter-map-reduce chaing of all the method

const Numbers = [1,2,3,4,5,6,7,8,9,10]

const newnumberd = Numbers
// chaining is using of method to chain itself
.map( (num ) => num *10 )
.map ( ( num) => num +1)
.filter ( ( num ) => num>=30)

console.log(newnumberd);
