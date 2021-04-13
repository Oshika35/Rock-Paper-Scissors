// function init() {

// }
// document.addEventListener('DOMContentLoaded', init);


function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound(playerSelection, computerSelection) {
    const roundResult = document.querySelector(".result");
    if (playerSelection === computerSelection) {
        return roundResult.textContent = 'Tie';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return roundResult.textContent = 'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return roundResult.textContent = 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return roundResult.textContent = 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return roundResult.textContent = 'You Lose! Paper beats Rock';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return roundResult.textContent = 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return roundResult.textContent = 'You lose! Rock beats Scissors';
    }
}


function game() {
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
    // const playerWin = [
    //     'You win! Rock beats Scissors',
    //     'You win! Paper beats Rock',
    //     'You win! Scissors beats Paper'
    // ];
    // const computerWin = [
    //     'You Lose! Paper beats Rock',
    //     'You lose! Scissors beats Paper',
    //     'You lose! Rock beats Scissors'
    // ];
    // let playerScore = 0;
    // let computerScore = 0;
    // const round = playRound(playerSelection, computerSelection);
    // alert(round);
    // if (playerWin.includes(round)) {
    //     playerScore += 1;
    //     alert('You scored 1 point');
    // }
    // else if (round === 'Tie') {
    //     alert('No point awarded');
    // }
    // else if (computerWin.includes(round)) {
    //     computerScore += 1;
    //     alert('Your opponent scored 1 point');
    // }
    // if (playerScore === 3) {
    //     alert('You won');
    // }
    // if (computerScore === 3) {
    //     alert('You lost');
    // }
}
game();