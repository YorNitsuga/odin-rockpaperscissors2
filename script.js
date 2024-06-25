function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(compChoice);

    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else if (compChoice === 3) {
        return "scissors";
    }
}

console.log(getComputerChoice())

let humanChoice = prompt("Choose between: rock, paper, scissors");

function getHumanChoice() {

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}

console.log(getHumanChoice());