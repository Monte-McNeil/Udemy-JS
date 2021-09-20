'use strict'
//CODING CHALLENGE #3 

/*
Time to improve Steven's tip calculator even more with using loops.

1. Create an array 'bills' containing all 10 test bill values
2. create empty arrarys for the tips and the totals
3. use the 'calcTip' function you wrote before to calculate
   tips and total values in the bills array, use a for loop to
   perform the 10 calculations

4. BONUS: Write a function called 'calcAverage' which takes an arr as an 
          argument. This function calculates the average of all numbers in the 
          given array.

          - Algorithm for bonus
                1. Add all values in the array using a for loop
                2. Divide the sum with the length of the array 
                3. Call the function with the 'totals' array 

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
*/

// CODE BELOW

// Creating bills, tips, and total arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; // 232.3 avg
const tips = [];  
const totals = []; 

// Function to calculate tips between ranges
const calcTip = (bills) => {
    if (bills >= 50 && bills <= 300) {
        let total = .15 * bills
        return total;
    } else { 
        let total = .20 * bills; 
       return total;
    }
  }

// Function to calculate averages 
const calcAverage = (arr) => { // passing an array as an argument 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// for loop to calculate tips on the 10 bills
for (let i = 0; i <= bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = bills[i] + tips[i];
}

console.log(tips)
console.log(totals)
console.log(calcAverage(totals))