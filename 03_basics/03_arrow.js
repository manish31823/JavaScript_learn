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
console.log(this);
