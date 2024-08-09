const ipl_players = ["Rusell", "Rashid", "Conway", "Bravo"]
const indian_players = ["Dhoni", "Rohit","Kolhi", "Bumrah"]

ipl_players.push(indian_players)
console.log(ipl_players);

//Spread operator..... .....>
const momos = ["cho","kho","lho"]
const paneer = ["choi","khoi","lhoii"]
const allitem = [...momos, ...paneer] // This is spread operator or we can use concatenate 
// console.log(allitem);

//Intersting array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);// by the help of flat we can modify any unique sort of an array

//Data scraping of web page -node list ,array,string
console.log(Array.isArray("Manish"))
console.log(Array.from("Manish"))//convert
console.log(Array.from({name : "Manish"})) //Intersting array it will give empty array beacuse does kniw the type of array of key or values

// Array of score
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

