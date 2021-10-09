'use strict'

/* DISCLAIMER
This is a code-along project, I do not take credit for the code written.
This is purely an educational lesson taught through the UDEMY course.
*/

// Creating random number
const sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highScore = 0;
// Adding a listener on the button and storing the value entered by user
document.querySelector('.check').addEventListener('click', 
function() {
    const guess = Number(document.querySelector('.guess').value) 

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number Entered'
    } else if (guess === sNumber) { // Right guess you win!
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = sNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > sNumber) { // too HIGH
        if(score > 1) {
            document.querySelector('.message').textContent = 'Number too high!'
            score--; // Score decreases
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost!'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < sNumber) { // too LOW
        if(score > 1) {
            document.querySelector('.message').textContent = 'Number too low!'
            score--; // Score decreases
            document.querySelector('.score').textContent = score;
        } else { // You lose
            document.querySelector('.message').textContent = 'You lost!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
});

// CODING CHALLENGE #1

/*
Implement a game reset functionallity so that a player can reset the game

Breaking down the problem:
1. Select the element with the 'again' class and attach a click event hander
2. In the handler function restore initial values of the score and number vars
3. Restore initial conditions of the message: number, score, and guesses
4. Restore original background color (#222) and number width (15rem)
*/ 

// CODE BELOW
 document.querySelector('.again').addEventListener('click', 
 function () {
    
     // Changing styles back
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.backgroundColor = '15rem'
     
     // Changing number, score, and guess
     document.querySelector('.score').textContent = 20;
     document.querySelector('.message').textContent = 'Start guessing...'
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';
     
 })