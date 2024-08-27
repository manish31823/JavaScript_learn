// for each loop js

const code = ["js","py","c++","java","django"]

code.forEach(function(values){ //this is call stack function removed the name of the function
    console.log(values);

})


code.forEach( (val)=>{ //using the arrow function
    console.log(val);

})


// checking the function array ,item and their parameter
code.forEach(function(item,index,arr){
    console.log(item,index,arr);
    

})


// array and object into once
const mycode = [
    {
        'languagename' : "javascipt",
        'languagefilename' : "js",

    },
    {
        'languagename' : "c++",
        'languagefilename' : "cpp",

    },
    {
        'languagename' : "Python",
        'languagefilename' : "py",

    }
]

mycode.forEach( (values)=>{
    console.log(values.languagename);
    
})