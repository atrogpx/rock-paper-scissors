// program to get a random item from an array

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"]
    let item = random(items)
    return item
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

score = 0

function game() {
    let playerSelection = prompt("Choose: rock, paper, or scissors?").toLowerCase()
    let computerSelection = getComputerChoice().toLowerCase()
    return function(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {return alert(`The computer chose ${computerSelection}. It's a tie!`)}

        else if ((playerSelection === "rock" && computerSelection ==="paper") | (playerSelection === "scissors" && computerSelection === "rock") 
        | (playerSelection === "paper" && computerSelection === "scissors")) {return alert(`Defeat! ${computerSelection.capitalizeFirstLetter()} beats ${playerSelection}.`)}
    
        else if ((computerSelection === "rock" && playerSelection ==="paper") | (computerSelection === "scissors" && playerSelection === "rock") 
        | (computerSelection === "paper" && playerSelection === "scissors")) {return alert(`Victory! ${playerSelection.capitalizeFirstLetter()} beats ${computerSelection}.`)}
    };
}

for (let step = 0; step < 5; step++) {
    let play = game()
    play()
  }