const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
function pointsGrammar(points) {
    if (points === 1) {
        return "point"
    }
    else {
        return "points"
    }
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection);
    if  (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`
    }
    else {
        if (playerSelection === 'Rock') {
            return (computerSelection === 'Scissor') ? 'You Win! Rock beats Scissor' : 'You Lose! Paper beats Rock'
        }
        else if (playerSelection === 'Paper') {
            return (computerSelection === 'Rock') ? 'You Win! Paper beats Rock' : 'You Lose! Scissor beats Paper'
        }
        else { //player chose scissor
            return (computerSelection === 'Paper') ? 'You Win! Scissor beats Paper' : 'You Lose! Rock beats Scissor'
        }
    }
}

function game() {
    const numRounds = prompt("How many rounds would you like to play?", "3");
    let playerScore = 0;
    let computerScore = 0;
    let finalResult = "";
    for (let i = 1; i <= +numRounds; i++) {
        const userChoice = prompt("Chose either Rock, Paper, or Scissor", "Rock");
        const computerSelection = getComputerChoice();

        roundStatement = playRound(userChoice, computerSelection);
        if (roundStatement[4] === 'W') {
           playerScore++; 
        }
        else if (roundStatement[4] === 'L') {
            computerScore++;
        }
        console.log(roundStatement);
    }
    if (playerScore === computerScore) {
        finalResult = "The Game was a Tie!";
    }
    else {
        finalResult = (playerScore > computerScore) ? "You Win!" : "Computer Wins.";
    }
    console.log(`You Scored ${playerScore} ${pointsGrammar(playerScore)}. Computer Scored ${computerScore} ${pointsGrammar(computerScore)}. ${finalResult}`);
}
game();