/* CODING CHALLENGE #2

There are 2 gymnastics teams, Dolphins and Koalas. They compete against eachother
3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team using the test data

2. Compare the teams average scores to determine the winner of the competition,
then print it to the console. Don't forget there can be a draw, so test for that
as well. (Which means they have the same average score).

3. BONUS #1: include a requirement so the mimimum score is at least 100.
With this rule the team that wins has a higher score than the other but also has
a score greater than 100. (Use a logical operator and if else blocks)

4. BONUS #2: Minimum score also applies to a draw, a draw only occures whan both teams
have both the same score and they're greater than or equal to 100 points otherwise if
the teams have scores lower than 100 then no team wins the trophy.

TEST DATA:
Dolphins score: 96, 108, 89
Koalas score: 88, 91, 110

TEST DATA BONUS #1
Dolphins score: 97, 112, 101
Koalas score: 101, 95, 123

TEST DATA BONUS #2
Dolphins score: 97, 112, 101
Koalas score: 109, 95, 106

ALGORITHM:
1. Create variables for both teams scores and average them
2. Using comparison operators with if/else blocks show what team wins
3. console.log what team wins in each block
4. Create logic for a draw and console.log it
5. Using an if statement and logical operators see if the teams have the minimum score of 100 to win
*/

// CODE BELOW

// Storing the averages of both teams in variables
const dolphinsAvgScore = (97 + 112 + 101) / 3; // 103.333
const koalasAvgScore = (109 + 95 + 106) / 3 // 103.3333

// Using if/else blocks with comparison and logical operators with a min score of 100, to see the winner, loser, or tie
if (dolphinsAvgScore < 100 && koalasAvgScore < 100) { // Starting if neither team got to 100 points
    console.log(`Neither team got the minimum required points to win! Dolphins at: ${dolphinsAvgScore}, and Koalas at: ${koalasAvgScore}!`)
} else if (dolphinsAvgScore >= 100 && koalasAvgScore < 100) { // if the Dolphins reached 100 and Koalas didn't 
    console.log(`Dolphins win with a average score of ${dolphinsAvgScore}, Koalas didn't reach the 100 point minimum with an average of ${koalasAvgScore}!`)
} else if (dolphinsAvgScore < 100 && koalasAvgScore >= 100) { // if the Koalas reached 100 and Dophins didn't 
    console.log(`Koalas win with a average score of ${koalasAvgScore}, Dolphins didn't reach the 100 point minimum with an average of ${dolphinsAvgScore}!`)
} else if (dolphinsAvgScore >= 100 && dolphinsAvgScore === koalasAvgScore) { // if the dolphins score equals the koalas and they are both above 100
    console.log(`It's a tie! with the Dolphins and Koalas at: ${dolphinsAvgScore}`)
}