let playerScore = 0;
let computerScore = 0;

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
}

function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound(playerSelection, computerSelection) {
    const roundResult = document.querySelector(".result");
    const roundScore = document.querySelector(".score");
    const hideButtonSection = document.querySelector(".selection-container");
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
    roundScore.textContent = "Your score " + playerScore + " | " + computerScore + " Computer Score";
    if (playerScore === 5) {
        roundResult.textContent = 'You Won!';
        hideButtonSection.classList.add("hidden");
    }
    if (computerScore === 5) {
        roundResult.textContent = 'You Lost!';
        hideButtonSection.classList.add("hidden");
    }
}

getUserInput();