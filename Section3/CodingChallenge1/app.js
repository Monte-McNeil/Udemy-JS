'use strict'
/* CODING CHALLENGE #1 

Back to the gymnastics teams, the Dolphins and Koalas. 
There is a new gymnastics discipline that works differently.

Each team competes 3 times, then the average of the 3 scores is calculated.
(one average score per team)

A team ONLY WINS if it has at least DOUBLE the average score of 3 scores.
Otherwise no team wins.

1. Create an arrow function called 'calcAverage' to calculate some averages
2. Create a function 'checkWinner' that takes the average scores of each team as params
3. Log the winner to the console like this 'Koalas win (30 vs 13)' Based on the rules above
4. use the checkWinner function to determine the winner for both data sets
5. Ignore draws this time

TEST DATA #1:
Dolphins score: 44, 23, 71
Koalas score: 65, 54, 49

TEST DATA #2
Dolphins score: 85, 54, 41
Koalas score: 23, 34 ,27

-- To find double score use this: A >= 2 * B
*/

// CODE BELOW

// Arrow function for calculating avg of 3 numbers
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Storing the avg score for the Dolhphins and Koalas in vars
const scoreDolphins = calcAverage(85, 54, 41) 
const scoreKoalas = calcAverage(23, 34, 27) 

// checkWinner function that compares the avg scores from both teams
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) { // if Dolphins have double the score 
        console.log(`Dolphins win: ${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) { // if Koalas have double the score
        console.log(`Koalas win: ${avgKoalas} vs ${avgDolphins}`)
    } else { // else no team wins
        console.log(`Neither team wins!`)
    }
}

// Calling the function to run the scores
checkWinner(scoreDolphins, scoreKoalas)
