'use strict'

// Global Scope variables
const me = 'monte'
const age = 23

// Function Scope
function calcAge(birthyear) {
    const now = 2021;
    const age = now - birthyear;
    return age; 
} // if you try to log now you will get a reference error

// Block Scope
let year = 1993
if (year >= 1981 && year <= 1996) {
    const millenial = true;
} // if you try to log millenial you will get a reference error 

const myName = 'jonas'; // global 

function first() {
    if (age >= 30) { // block 
        const decade = 3
        var millenial = true;
    }
    function second() {
        const job = 'teacher';
        console.log(`${myName} is a ${age}-old ${job}`)
    }
    second();
}

first();