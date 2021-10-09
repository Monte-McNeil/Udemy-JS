'use strict'
//CODING CHALLENGE #2

/*
PROBLEM

We work for a company building a smart home thermometer.
Our task is to take an array of temps of one day, then
calculate the temerature (temp) amplitude 

Keep in mind we might get a censor error
*/

let temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

/* 

1.) Understand the problem 
    temp amplitude is used to measure the difference between 
    the max and min temps in a period of time. 

    A = Tmax - Tmin

    A = amplitude of the temp over the time period calculated 
    Tmax = Highest temp recorded during the time period
    Tmin - Lowest temp recorded during the time period

2. Breaking up into sub problems

    1. filter through the array and remove any possible errors
    2. Using the Math max & min methods get the highest and lowset temps
    3. Use the equation above to calculate the temp amplitude
    4. Display the data to the user 
*/

// Using the filter method sort through and remove the error
temps = temps.filter((n) => {return n != 'error'})

// Using the min and max Math methods get the highest and lowest temps
const highestTemp = Math.max(...temps)
const lowestTemp = Math.min(...temps)

// Perform the calculation to get amplitude and save it
let amplitude = highestTemp - lowestTemp

// Display the data to the user in the console
console.log(`Todays tempurature amplitude is: ${amplitude}`)

  