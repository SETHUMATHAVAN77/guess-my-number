
document.querySelector('.random-guess').style.color = 'red';
document.querySelector('.random-guess').style.backgroundColor = 'lightyellow';

//elements
const inputEL = document.querySelector('.user-input');
const scoreEL = document.querySelector('.score');
const randomEl = document.querySelector('.random-guess');
const messageEl = document.querySelector('.error-message');
//btn-submit
const btnSubmit = document.querySelector('.btn-submit');

// global variables
const randomNumber = Math.floor(Math.random()*100 )+1; 
let score = 20;
// functions c
const displayMessage = function (message, color){
  messageEl.style.display = 'block';
  messageEl.style.color = color;
  messageEl.innerText = message;
}


// event listeners

btnSubmit .addEventListener('click', function() {
      const userInput = Math.ceil(Number(inputEL.value)); 
      if( userInput < 1 || userInput > 100)
      {
    displayMessage('Enter A Valid Input', 'red');
      }
      else {
          if( score > 1){
            if(userInput === randomNumber){
              displayMessage(`You won, score:${score}`, 'green');
          randomEl.innerText = randomNumber;
            }else{

              let message = `your guess is ${userInput > randomNumber ? 'greater' : 'lower'}`
              displayMessage(message, 'red');
              score = score - 1;
          scoreEL.innerText = score;
            }

          }else{
            displayMessage('Game Over', 'red');
            randomEl.innerText = randomNumber;
          }
      }
      console.log(userInput);
})


