let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector(".game-display__result");
const roundScore = document.querySelector(".game-display__score");
const hideButtonSection = document.querySelector(".player-selection");
const toggleRestartButton = document.querySelector(".restart-selection");

function getUserInput() {
    const rockSelection = document.querySelector("#rock");
    const paperSelection = document.querySelector("#paper");
    const scissorsSelection = document.querySelector("#scissors");
    rockSelection.addEventListener('click', () => {
        playRound('Rock', computerPlay());
    });
    paperSelection.addEventListener('click', () => {
        playRound('Paper', computerPlay());
    });
    scissorsSelection.addEventListener('click', () => {
        playRound('Scissors', computerPlay());
    });
    toggleRestartButton.addEventListener('click', () => {
        hideButtonSection.classList.remove("player-selection--hidden");
        toggleRestartButton.classList.add("restart-selection--hidden");
        playerScore = 0;
        computerScore = 0;
        displayScore();
    });
}

function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        roundResult.textContent = 'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1;
        roundResult.textContent = 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        roundResult.textContent = 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1;
        roundResult.textContent = 'You Lose! Paper beats Rock';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        roundResult.textContent = 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        roundResult.textContent = 'You lose! Rock beats Scissors';
    }
    displayScore();
    if (playerScore === 5) {
        roundResult.textContent = 'You Won!';
        hideButtonSection.classList.add("player-selection--hidden");
        toggleRestartButton.classList.remove("restart-selection--hidden");
    }
    if (computerScore === 5) {
        roundResult.textContent = 'You Lost!';
        hideButtonSection.classList.add("player-selection--hidden");
        toggleRestartButton.classList.remove("restart-selection--hidden");
    }
}

function displayScore() {
    roundScore.textContent = "Your score " + playerScore + " | " + computerScore + " Computer Score";
}

getUserInput();