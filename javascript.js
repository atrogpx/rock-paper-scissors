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

// starter score

score = 0

// playround function takes playerSelection and computerSelection and returns a string
// playerSelection gets case insensitive

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        {alert(`The computer chose ${computerSelection}. It's a tie!`),
        alert(score)}

    else if ((playerSelection === "rock" && computerSelection ==="paper") 
        || (playerSelection === "scissors" && computerSelection === "rock") 
        || (playerSelection === "paper" && computerSelection === "scissors")) 
        {alert(`Defeat! ${computerSelection} beats ${playerSelection}.`),
        alert(--score)}
    
    else if ((computerSelection === "rock" && playerSelection ==="paper") 
        || (computerSelection === "scissors" && playerSelection === "rock") 
        || (computerSelection === "paper" && playerSelection === "scissors")) 
        {alert(`Victory! ${playerSelection} beats ${computerSelection}.`),
        alert(++score)}
  }

// Loop for 5 rounds

for (let step = 0; step < 5; step++) {
    const playerSelection = prompt("Choose: rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  }
finalScore(score)

// Declare winner or loser

function finalScore(score) {
    if (score > 0) {alert(`You win! Final score is: ${score}`)}
    else if (score === 0) {alert(`It's a tie!  Final score is: ${score}`)}
    else if (score < 0) {alert(`You lost! Final score is: ${score}`)}
}