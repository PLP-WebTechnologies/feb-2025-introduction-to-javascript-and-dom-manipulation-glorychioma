const button = document.querySelector('.btn');

button.onclick = function changeText(){
    button.textContent = 'Thank you!';
}


// let buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//   button.onclick = function() {
//     buttons.forEach(btn => {
//       btn.textContent = 'Thank you!';
//     });
//   };
// });

const myButton = document.querySelector('.click-btn');
const box = document.querySelector('.box');
const ele1 = document.querySelector('.peru');


myButton.onclick = function changeMe(){
    if(box.style.background == 'peru'){
        box.style.background = 'maroon';
        ele1.textContent = 'This is Maroon';
        
    } else{
        box.style.background = 'peru'
        ele1.textContent = 'This is Peru';
        
    }
    
}


// #a17a69