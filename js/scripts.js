function getUserInput() {
    let answer = prompt("Rock, Paper or Scissors ?").toLowerCase();
    if (answer == 'rock') {
        return 'Rock';
    }
    else if (answer == 'paper') {
        return 'Paper';
    }
    else if (answer == 'scissors') {
        return 'Scissors';
    }
    else {
        alert("Incorrect answer, try again");
        return getUserInput();
    }
}

function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound() {
    const playerSelection = getUserInput();
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return 'Tie';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
}

alert(playRound());