// //   object in the map 

const language = {
    'js' : "javascript",
    'py' : "python",
    'dj' : "django",
    'cpp' : "c++",

}
for (const key in language) { //imse number ahte h value nhi ahti for in m
    console.log(`${key} shortcut key for ${language[key]} `);
    
}


// // for in loop in array

const programing = ["js","py","c++","java"]

for (const key in programing) { // 
    console.log(programing[key]);
    
    
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Arg' , "Argetina") // not possible to iterator
map.set('USA' , "United States Of America")

for (const key in map) {
    console.log(map[key]);
    
}



