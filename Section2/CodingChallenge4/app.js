/* CODING CHALLENGE #4

Steven wants to create a simple tip calculator.
Where he lives it's usual to tip 15% if the bills value is
between 50 and 300 dollars. If that value is different, the tip is 20%

1. Calculate the tip depending on the bill value
    a) The challenge is you can't use an if/else block

2. Print a string to the console containing the following values:
    a) The bill value
    b) The tip
    c) final value (bill + tip)

Format: 'The bill was 275, the tip was 41.25, and the total value was 316.25'

TEST DATA:
Bill values: 275, 40, 430

ALGORITHM:
1. Create a var called bill and set it equal to a test data bill value
2. Create 2 vars called tip1 and tip2 to hold the tip calculations
4. Using the ternary operator if the bill is between 50-300 use tip1 then console.log step 2
5. If the bill is outside the 50-300 range use tip2 then console.log step 2
*/

// CODE BELOW

// Creating variables and performing the tip calculation
const bill = 430;
const tip1 = .15 * bill;
const tip2 = .20 * bill;

// for the condition see if the bill is in the 50-300 range, if it is console.log step 2 using template literalls
bill >= 50 && bill <= 300 ? console.log(`The bill was: ${bill}, the tip was: ${tip1}, the total was: ${tip1 + bill}`)
: console.log(`The bill was: ${bill}, the tip was: ${tip2}, the total was: ${tip2 + bill}`)
// else the bill isnt in the 50-300 range so use tip 2 when console.log step 2 using template literalls

