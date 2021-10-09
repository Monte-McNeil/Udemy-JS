'use strict'
/* CODING CHALLENGE #2  

Steven is still building his tip calculator, using the same rules as before.
Tip 15% if the bill value is between 50 & 300.
Tip 20% if the bill valie is different.

1. Write a function called 'calcTip' that takes a bills value as an input
and returns the tip calculated based on the rules above.

2. Create an array called 'bills' containing the test data below.

3. Create an array called 'tips' containing the tip value for each bill
   calculated from the function you made before.

4. BONUS: Create an array called 'total' containing the total values.
          (bill + tip)

TEST DATA: 125, 555, 44

*/

// CODE BELOW

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) { // Calculating the tip if between 50 and 300
        var tip = .15 * bill;
        return tip;
    } else { // If its outside that range 
        var tip = .20 * bill; 
        return tip;
    }
}

const bill = [125, 555, 44]; // Array for bill values
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]; // Invoking the calcTip function on the bill arrays indexes 
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]; // Adding the bills values with the tips calculated at those indexes 

console.log(tips) 
console.log(total)
