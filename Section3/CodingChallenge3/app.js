'use strict'
//CODING CHALLENGE #3 

/*
Let's go back to Mark and John comparing thier BMIs,
this time we will use objects to implement the calculations
Remember: BMI = mass / height **2 || BMI = mass / (height * height)
(mass in kg and height in meters)

1. For each of them create an object with properties:values for their:
    full name
    mass
    height

2. Create a 'calcBMI' method on each object to calculate the BMI
   (the same method on both objects). Store the BMI value to a property
   and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and
   the respective BMI's.

   "John's BMI (28.3) is higher than Mark's (23.9)!"

Test Data: John weight: 92kg : height is 1.95m
           Mark weight: 78 kg : height is 1.69m
*/

// CODE BELOW

// Object for Johns data
const johnData = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
     
    // Method for Johns BMI calculation using .this to create a new property called bmi, then using the height and mass properties to help calculate
    calcBMI: function () {
         this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

// Object for Marks data
const markData = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // Same method used with John
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

// Simple if statement looking into the objects and seeing whose BMI is higher 
if (johnData.calcBMI.bmi > markData.calcBMI.bmi) { 
    console.log(`${johnData.fullName}s BMI (${johnData.calcBMI()}) is higher than ${markData.fullName}s (${markData.calcBMI()})!`) // if Johns is higher print this
} else {
    console.log(`${johnData.fullName}s BMI (${johnData.calcBMI()}) is lower than ${markData.fullName}s (${markData.calcBMI()})!`) // if Marks is higher print this
}