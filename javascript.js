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

cp_choice = getComputerChoice()
alert(cp_choice)