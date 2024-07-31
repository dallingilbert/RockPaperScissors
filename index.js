let humanScore = 0;
let computerScore = 0;

/*  Write logic for computer choice ***********
 *  1. Generate randomized number
 *  2. Return choice based on assigned number
 **********************************************/
function getComputerChoice(max) {
    const choice = Math.floor(Math.random() * max);
    
    if (choice === 0) return "rock"
    else if (choice === 1) return  "paper"
    else if (choice === 2) return "scissors"
}

/*  Write logic to retrieve the human choice *
 *  1. Prompt for input
 *  2. Return input
 *********************************************/
function getHumanChoice(){
    const choice = prompt('Please enter Rock, Paper or Scissors:');
    return choice.toLowerCase();
}

/*  Logic for determining winner ************** 
 *  1. Compare human input to computer input
 *  2. Rock < Paper, Rock > Scissors
 *  3. Paper < Scissors, Paper > Rock
 *  4. Scissors < Rock, Scissors > Paper
 * ********************************************/
function getWinner(computer, human) {
    console.log(`Computer choice: ${computer}, Human Choice: ${human}`);

    if (computer === "rock" && human === "paper") {
        console.log('You win! Paper beats Rock.')
        return 1;
    } else if (computer === "paper" && human ===  "scissors") {
        console.log('You win! Scissors beats Paper.')
        return 1;
    } else if (computer === "scissors" && human === "rock") {
        console.log('You win! Rock beats Scissors.')
        return 1;
    } else if (computer === human) {
        console.log('It\s a tie! You both had the same choice.')
        return null;
    }
    else {
        console.log(`You lose! ${computer} beats ${human}`)
        return 0;
    }
}

/*  Write logic to play a single round **
 *  1. Get computer input
 *  2. Get human input
 *  3. Determine winner
 *  4. Add score to winner
 * **************************************/
function playSingleRound() {
    let compChoice = getComputerChoice(3);
    let humanChoice = getHumanChoice();

    // Determine winner
    let winner = getWinner(compChoice, humanChoice);
    
    if (winner === 1) {
        humanScore += 1;
    } else if (winner === 0) {
        computerScore += 1;
    }

    console.log(`Human Score: ${humanScore} \tComputer Score: ${computerScore}`)

}

// Play 3 rounds of rock, paper scissors.
let rounds = 3;

while (rounds > 0) {
    playSingleRound();
    rounds = rounds - 1;
}

