/* CODING CHALLENGE #!
Mark and John are comparing ther BMI which is this formula: 
mass / height ^ 2 same as mass / (height * height) (choose one way)
mass in kg and height in meter

  ALGORITHM 
1. Store their height and weight in variables
2. Calcultate both BMI's using the formula
3. Create a boolean variable markHigherBMI to show whether mark has a higher BMI than John

  TEST DATA 1 & 2
1. Mark w = 78kg and is 1.69m tall
   John w = 92kg and is 1.95m tall

2. Mark w = 95kg and is 1.88m tall
   John w = 85kg and is 1.76m tall
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
console.log('Marks BMI: ' + marksBMI);

// Using the BMI formula on John and storing the outcome in a variable
const johnsBMI = johnWeight / ( johnHeight * johnHeight);
console.log('Johns BMI:  ' + johnsBMI);

// Using a booleon variable and comparison operators to show who has the larger BMI
let markHigherBMI = marksBMI >= johnsBMI;
console.log(markHigherBMI);