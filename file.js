let currentPlayerScore = 0;
let currentComputerScore = 0;

const myButtons = document.querySelectorAll('.choice');
myButtons.forEach(
    b => b.addEventListener('click', (e) => playRound(e.target.id, getComputerChoice()))
);

const currentComputerChoice = document.querySelector('#computer-choice');
const playerScoreDisp = document.querySelector('#player-score');
const compScoreDisp = document.querySelector('#computer-score');
const roundString = document.querySelector('#current-round-result')

function updateScore() {
    compScoreDisp.textContent = currentComputerScore;
    playerScoreDisp.textContent = currentPlayerScore;
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    currentComputerChoice.textContent = `Computer's Choice: ${computerSelection}`
    if (playerSelection === computerSelection) {
        roundString.textContent = 'It\'s a Tie';
    }
    else {
        if (playerSelection === 'Rock') {
            if (computerSelection === 'Scissor') {
                roundString.textContent = 'You take the Round!';
                currentPlayerScore += 1;

            } else {
                roundString.textContent = 'Computer wins this one';
                currentComputerScore += 1;
            }
        }
        else if (playerSelection === 'Paper') {
            if (computerSelection === 'Rock') {
                roundString.textContent = 'You take the Round!';
                currentPlayerScore += 1;
            } else {
               roundString.textContent = 'Computer wins this one';
               currentComputerScore += 1;
            }
        }
        else { //player chose scissor
            if (computerSelection === 'Paper') {
                roundString.textContent = 'You take the Round!';
                currentPlayerScore += 1;
            } else {
                roundString.textContent = 'Computer wins this one';
                currentComputerScore += 1;
            }
        }
    }
    updateScore();
    checkForWinner();
}
function checkForWinner() {
    if (currentPlayerScore === 5 || currentComputerScore === 5) {
        alert(currentComputerScore > currentPlayerScore ? 'Computer Wins :(': 'You win! Congrats!');
    
        myButtons.forEach(
            b => b.disabled = true
        );
        roundString.textContent = "Reload page to start a new game"
    }
}
function checkForWinner() {
    if (currentPlayerScore === 5 || currentComputerScore === 5) {
        setTimeout(() => {
            alert(currentComputerScore > currentPlayerScore ? 'Computer Wins :(' : 'You win! Congrats!');
            myButtons.forEach(b => {
                b.disabled = true;
                b.classList.add('no-hover');
            })   
            roundString.textContent = "Reload page to start a new game";
        }, 0);
    }
}
