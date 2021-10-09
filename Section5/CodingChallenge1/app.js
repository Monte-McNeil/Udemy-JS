'use strict'
//CODING CHALLENGE #1

/*
PROBLEM:

Given an array of forcasted maximum tempuratures (temps),
the thermometer displays a string with these temps and days to match...

ex: [17, 21, 23] will print "17°C in 1 days, 21°C in 2 days, 23°C in 3 days"

Create a function 'printForecast' which takes in an 'arr' and logs the string

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
/* 

1.) Understand the problem 
    I have to get the indiviual values from the array and dynamically 
    make a string that puts the those temps beside days. The number of days
    will increase with the size of the array. 

2. Breaking up into sub problems
    1. Create the function with 'arr' as a param
    2. Loop through the array
    3. For each inividual value of the array add the °C and the day it is 
*/
function printForecast (arr) {
    for (let i = 0; i < arr.length; i++) {
       // let days = i + 1
        console.log(`${arr[i]}°C in ${i + 1} days`)
    }
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));