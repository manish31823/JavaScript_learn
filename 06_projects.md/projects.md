JS Pojects 
1 Colour Switcher 
<!-- project 1 code -->
// console.log("JS_projects")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'Pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
    
  });
});

//project -2 Source code

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const Height= parseInt(document.querySelector('#Height').value);
  const Weight = parseInt(document.querySelector('#Weight').value);
  const results = document.querySelector('.results');

  if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Please give a valid weight ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (Weight < 18.6) {
       results.innerHTML(`${bmi}`)
        
        
    }
  }
});



//project -3

const clock = document.querySelector('#Clock')
// document.getElementById('Clock')

// date
// let date = new Date()
// console.log(date.toLocaleDateString());

//setinterval select the with a fixed time delay between each call.
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000);