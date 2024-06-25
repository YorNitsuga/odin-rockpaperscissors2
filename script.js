function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else if (compChoice === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose between: rock, paper, scissors").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, compChoice) {
        if (humanChoice === "rock" && compChoice === "rock") {
            console.log(`It's a tie! You both chose rock!`);
        } else if (humanChoice === "rock" && compChoice === "paper") {
            computerScore++;
            console.log(`You lost! ${humanChoice} gets beaten by ${compChoice}`);
        } else if (humanChoice === "rock" && compChoice === "scissors") {
            humanScore++;
            console.log(`You won! ${humanChoice} beats ${compChoice}`);
        } else if (humanChoice === "paper" && compChoice === "paper") {
            console.log("It's a tie! You both chose paper!");
        } else if (humanChoice === "paper" && compChoice === "scissors") {
            computerScore++;
            console.log(`You lost! ${humanChoice} gets beaten by ${compChoice}`);
        } else if (humanChoice === "paper" && compChoice === "rock") {
            humanScore++;
            console.log(`You won! ${humanChoice} beats ${compChoice}`);
        } else if (humanChoice === "scissors" && compChoice === "scissors") {
            console.log("It's a tie! You both chose scissors!");
        } else if (humanChoice === "scissors" && compChoice === "rock") {
            computerScore++;
            console.log(`You lost! ${humanChoice} gets beaten by ${compChoice}`);
        } else if (humanChoice === "scissors" && compChoice === "paper") {
            humanScore++;
            console.log(`You won! ${humanChoice} beats ${compChoice}`);
        }
    }

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();