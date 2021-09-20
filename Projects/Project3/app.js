'use strict'

/* DISCLAIMER
This is a code-along project, I do not take credit for the code written.
This is purely an educational lesson taught through the UDEMY course. 
*/

// Selecting elements 
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let currentScore = 0;
// Rolling dice functionallity
btnroll.addEventListener('click', 
    function() {
    // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`
    // 3. Check for rolled 1: if true switch to next player
        if(dice !== 1) {
            currentScore += dice
        } else {

        }

    })
