// declare constants

playerScore = 0
computerScore = 0
const result = document.querySelector(".result");
const announceWinnerDiv = document.querySelector("#announce-winner");

// select the buttons, put listeners on them
// call playRound function with the correct playerSelection

const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

rock_btn.addEventListener("click", rockChosen);
paper_btn.addEventListener("click", paperChosen);
scissors_btn.addEventListener("click", scissorsChosen);

function rockChosen() {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
}
function paperChosen() {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
}
function scissorsChosen() {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
}

// select result div, show the results in result div

//go on until one of the players reaches 5 points

// Program to return randomly r, p, s

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function getComputerChoice() {
    let items = ["rock", "paper", "scissors"]
    let item = random(items)
    return item
}

// Capitalize the first letter for declaring the winner

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// playround function takes playerSelection and computerSelection and returns a string
// playerSelection gets case insensitive

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        {result.textContent = `The computer chose ${computerSelection}. It's a tie!
        Your score: ${playerScore}
        Computer score: ${computerScore}`}

    else if ((playerSelection === "rock" && computerSelection ==="paper") 
        || (playerSelection === "scissors" && computerSelection === "rock") 
        || (playerSelection === "paper" && computerSelection === "scissors")) 
        {result.textContent = `Defeat! ${computerSelection} beats ${playerSelection}.
        Your score: ${playerScore}
        Computer score: ${++computerScore}`}
    
    else if ((computerSelection === "rock" && playerSelection ==="paper") 
        || (computerSelection === "scissors" && playerSelection === "rock") 
        || (computerSelection === "paper" && playerSelection === "scissors")) 
        {result.textContent = `Victory! ${playerSelection} beats ${computerSelection}.
        Your score: ${++playerScore}
        Computer score: ${computerScore}`}
  }

// Loop for 5 rounds

/* for (let step = 0; step < 5; step++) {
    const playerSelection = prompt("Choose: rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  }
finalScore(score) */

// Declare winner or loser

function announceWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {announceWinnerDiv.textContent = `You win! Final score is: ${playerScore}`}
    else if (playerScore === computerScore) {announceWinnerDiv.textContent = `It's a tie!  Final score is: ${playerScore}`}
    else if (playerScore < computerScore) {announceWinnerDiv.textContent = `You lost! Final score is: ${playerScore}`}
}