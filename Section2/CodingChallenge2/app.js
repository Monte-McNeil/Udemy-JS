/* CODING CHALLENGE #2
Use the code from the BMI challenge #1 and improve upon it

1. Print a nice output to the console, saying who has the higher BMI, this message
will say who has the higher BMI. Saying "Marks BMI is higher than John's",vice versa.

2. Use a literal string to include the BMI values. Ex: "Marks BMI of (26) is higher than John's (23)"

ALGORITHM
1. Get rid of the booleon variable option and use an if / else statement
2. Compare the condition of Marks BMI and Johns BMI
3. If marks is higher print `Marks BMI (${marksBMI}), is higher than Johns BMI (${johnsBMI})`
4. Else print `Johns BMI (${johnsBMI}), is higher than Marks BMI (${MarksBMI})`
*/

// CODE BELOW

// Storing Marks data
const markWeight = 78;
const markHeight = 1.69;

// Storing Johns data
const johnWeight = 92;
const johnHeight = 1.95;

// Using the BMI formula on Mark and storing the outcome in a variable
const marksBMI = markWeight / ( markHeight * markHeight);

// Using the BMI formula on John and storing the outcome in a variable
const johnsBMI = johnWeight / ( johnHeight * johnHeight);

// Comparing BMI's
if (marksBMI > johnsBMI) {
    console.log(`Marks BMI (${marksBMI}), is higher than Johns (${johnsBMI})`) // Using a literal string  to log Marks & Johns BMI if Marks is higher
} else { // else Johns BMI is higher 
    console.log(`Johns BMI (${johnsBMI}), is higher than Marks BMI (${MarksBMI})`) // Using a literal string  to log Marks & Johns BMI if Johns is higher 
}