// Declare variables
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

let response = document.getElementById('response');
let playerScoreResponse = document.getElementById('playerScore');
let computerScoreResponse = document.getElementById('computerScore');
let tieScoreResponse = document.getElementById('tieScore');

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Plays a single round and returns round result and counts score
function playRound(playerSelection, computerSelection) {
    // Rock
    if (playerSelection == 'rock' && computerSelection == 'rock' ) {
        tieScore++;
        response.textContent = 'Tie!';
        tieScoreResponse.textContent = `Tie(s): ${tieScore}`;
    }   else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        response.textContent = 'You lose! Paper beats rock!';
        computerScoreResponse.textContent = `Computer Score: ${computerScore}`;
    }   else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        response.textContent = 'You win! Rock beats scissors!';
        playerScoreResponse.textContent = `Player Score: ${playerScore}`;
        // Paper
    }   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        response.textContent = 'You win! Paper beats rock!';
        playerScoreResponse.textContent = `Player Score: ${playerScore}`;
    }   else if (playerSelection == 'paper' && computerSelection == 'paper') {
        tieScore++;
        response.textContent = 'Tie!';
        tieScoreResponse.textContent = `Tie(s): ${tieScore}`;
    }   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        response.textContent = 'You lose! Scissors beat paper!';
        computerScoreResponse.textContent = `Computer Score: ${computerScore}`;
        // Scissors
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        response.textContent = 'You lose! Rock beats scissors!';
        computerScoreResponse.textContent = `Computer Score: ${computerScore}`;
    }   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        response.textContent = 'You win! Scissors beat paper!';
        playerScoreResponse.textContent = `Player Score: ${playerScore}`;
    }   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        tieScore++;
        response.textContent = 'Tie!';
        tieScoreResponse.textContent = `Tie(s): ${tieScore}`;
    }
}

function computerPlay() { // Picks between 'rock', 'paper', or 'scissors'
    const hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random() * 3)];
}

function playerPlay() { // Picks between 
    rockBtn.onclick = function() {
        return 'rock';
    }
    paperBtn.onclick = function() {
        return 'paper';
    }
    scissorsBtn.onclick = function() {
        return 'scissors';
    }
}

// The game 
function game(playerHand) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = playerHand;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore == 5) {
        response.textContent = 'Game over. You win!'
    }
    if (computerScore == 5) {
        response.textContent = 'Game over. You lose!'
    }
}

// Play the game after clicking button
rockBtn.addEventListener('click', () => {
    game('rock');
})
paperBtn.addEventListener('click', () => {
    game('paper');
})
scissorsBtn.addEventListener('click', () => {
    game('scissors');
})