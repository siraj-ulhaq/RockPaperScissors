
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const results = document.querySelector(".results");

const playerScore = document.createElement("p");
const compScore = document.createElement("p");

const announcePlayer = document.createElement("p");
const announceComp = document.createElement("p");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    // should randomly return one of the following strings
    // "rock", "paper", "scissors"
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const draw = document.createElement('p');
    draw.textContent = "Draw!"
    const loss = document.createElement("p");
    loss.textContent = "You lost!";
    const win = document.createElement("p");
    win.textContent = "You win!"

    if (humanChoice == computerChoice) {
        results.append(draw);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        results.append(loss);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        results.append(win);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        results.append(win);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.append(loss);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.append(loss);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.append(win);
        humanScore++;
    }

    if (humanScore == 5) {
        announcePlayer.textContent = "YOU WIN THE GAME";
        results.append(announcePlayer);
    }
    if (computerScore == 5) {
        announceComp.textContent = "YOU LOST THE GAME";
        results.append(announceComp);
    }
}


playerScore.textContent = "Player Score: ";
compScore.textContent = "Computer Score: ";

results.append(playerScore);
results.append(compScore);

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    playerScore.textContent = "Player Score: " + humanScore;
    compScore.textContent = "Computer Score: " + computerScore;
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    playerScore.textContent = "Player Score: " + humanScore;
    compScore.textContent = "Computer Score: " + computerScore;
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    playerScore.textContent = "Player Score: " + humanScore;
    compScore.textContent = "Computer Score: " + computerScore;
});

