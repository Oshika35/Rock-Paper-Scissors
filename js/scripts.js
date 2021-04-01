function getUserInput() {
    let answer = prompt('Rock, Paper or Scissors ?').toLowerCase();
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
        alert('Incorrect answer, try again');
        return getUserInput();
    }
}

function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
}


function game() {
    const playerWin = [
        'You win! Rock beats Scissors',
        'You win! Paper beats Rock',
        'You win! Scissors beats Paper'];
    const computerWin = [
        'You Lose! Paper beats Rock',
        'You lose! Scissors beats Paper',
        'You lose! Rock beats Scissors'];
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = getUserInput();
        const computerSelection = computerPlay();
        const round = playRound(playerSelection, computerSelection);
        alert(round);
        if (playerWin.includes(round)) {
            playerScore += 1;
            alert('You scored 1 point');
        }
        else if (round === 'Tie') {
            alert('No point awarded');
        }
        else if (computerWin.includes(round)) {
            computerScore += 1;
            alert('Your opponent scored 1 point');
        }
        if (playerScore === 3) {
            alert('You won');
        }
        if (computerScore === 3) {
            alert('You lost');
        }
    }
}

game();