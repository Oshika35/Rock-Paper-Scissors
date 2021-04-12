// function init() {

// }
// document.addEventListener('DOMContentLoaded', init);


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
    const rockSelection = document.querySelector("#rock");
    const paperSelection = document.querySelector("#paper");
    const scissorsSelection = document.querySelector("#scissors");
    const computerSelection = computerPlay();
    rockSelection.addEventListener('click', () => console.log(playRound('Rock', computerSelection)));
    paperSelection.addEventListener('click', (e) => console.log(playRound('Paper', computerSelection)));
    scissorsSelection.addEventListener('click', (e) => console.log(playRound('Scissors', computerSelection)));
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