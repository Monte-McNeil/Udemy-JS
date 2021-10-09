'use strict';

/* DISCLAIMER
This is a code-along project, I do not take credit for the code written.
This is purely an educational lesson taught through the UDEMY course. 
*/

// Too start it's common to grab all the elements we need and store them in vars
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')


const openModel = function () {
    modal.classList.remove('hidden') // Making the modal visible
    overlay.classList.remove('hidden') // Making the overlay visible
}

const closeModal = function () {
    modal.classList.add('hidden') // re-adding the modal hidden 
    overlay.classList.add('hidden') // re-adding the overlay hidden 
}

// Since we are using querySelectorAll we must loop through them
// Whatever one is clicked is where i will be
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModel)
}

// Adding an event listener for the close button
btnCloseModal.addEventListener('click', closeModal);

// Adding an event listener on the overlay so the app closes when you click outside the modal window
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', 
function (e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})