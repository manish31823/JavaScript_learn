// How to use the objects in single ton using constructor 

// const Appleuser = new object ()  // This is a singleton
const Appleuser = {} // this is just an object

Appleuser.id = "123abc"
Appleuser.name = "john doe"
Appleuser.isloggedIn = true
//  console.log(Appleuser);

// how to create an object in object in object

const Adminuser = {
    email : "gg@gmail.com",
    fullname : {
        username : {
            firstname : "Manish", // This is nesting of an object
            Lastname : "chaudhary"
        }

    }

}
// console.log(Adminuser.fullname.username); //object nesting
//what is optional chaining?

//COmbine of object----->
 
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {3: "a", 4:"b"}

// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)// here it is good if we will give empty parenthesis to give the guaranted result object assign


//Spread operator---->
const obj3 = {...obj1,...obj2,...obj4} //important and latest use of spread operator
console.log(obj3);

//Synatx for get the values from the databse
// array object

console.log(object.keys(Appleuser));
console.log(object.values(Appleuser));
console.log(object.entries(Appleuser));




// de structure of the objects

const student = {
    name : "Anku",
    age : 15,
    city : "delhi",
    hobby : "cricket"
}
// console.log(student(city));

const {city : jagah} = student // this is de-structure of the object -----and here we can also change the key of the objects
// console.log(jagah);

// React basic of de-structure using insttead of the props

// const navbar = ({company}) => {

// } 
// navbar(company= hitesh)

// json-javascript object notation
// {
//     name : "manu",
//     class : 10,
//     age : 17, //it is an object of the API json is better than xml file

// }


 