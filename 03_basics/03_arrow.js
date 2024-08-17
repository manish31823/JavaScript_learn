// this keyword is used to refer  on current context -----this keyword

const user = {
    username : "manish",
    price : 1000, // there is no this in arrow function

    welcomeMessage : function(){
        console.log(` ${this.username} ,welcome to my website`);
        console.log(this);
        
        
    }


}

// user.welcomeMessage()
// user.username = "golu" //value has no hardcore here
// user.welcomeMessage()
// console.log(this);


// function created

// function Momos(){
//     let username = "Mritunjay"
//     console.log(this.username);
    

// }

// Momos()

const Momos = function(){
    let username = "Mritunjay"
        console.log(this.username);

}


// assign an arrow function just removed the function keyword and put the =>

const Momos2 = () => {
    let username = "Mritunjay"
        console.log(this.username);

}
// Momos()

// assigan an simple Arrow function or explicit return 
// const addnumber = (num1,num2) => {
//     return num1+ num2

// }
// console.log(addnumber(50,40));

// implict return removes the parenthesis form function
const addnumber = (num1,num2) =>   num1 + num2


console.log(addnumber(50,40));