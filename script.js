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

function getHumanChoice() {
    let human = prompt(
        "Please Type your option:\n1. Rock\n2. Paper\n3. Scissors"
    );
    if (human == 1) {
        // console.log("Rock");
        return "rock";
    } else if (human == 2) {
        // console.log("Paper");
        return "paper";
    } else if (human == 3) {
        // console.log("Scissors");
        return "scissors";
    }
}

function decreaseHumanScore() {
    if (humanScore > 0){
        humanScore--;
    }
}

function decreaseComputerScore() {
    if (computerScore > 0){
        computerScore--;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("Draw! No one wins");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats rock");
        computerScore++;
        decreaseHumanScore();
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
        decreaseComputerScore();
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
        decreaseComputerScore();
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat Paper")
        computerScore++;
        decreaseHumanScore();
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        decreaseHumanScore();
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
        decreaseComputerScore();
    }
}

function playGame() {
    for (i=1; i<=5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("human:" + humanSelection);
        console.log("computer:" + computerSelection);
        playRound(humanSelection, computerSelection);
    }
}

playGame();

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


// playRound(humanSelection, computerSelection);