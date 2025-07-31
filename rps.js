// This code can be used together with html and it play
// rock paper scissors entirely in the console


var humanScore = 0;
var computerScore = 0;

/**
 * Gets a random int and returns rock paper os sciccorr
 */

function getComputerChoice() {

    var randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

/**
 *  Returns the human choice of rock, paper or scissors
 * */
function getHumanChoice() {
    // declearing a variable called choice
    let choice;
    // continues to ask until rock, paper or scissors is written
    while (true) {
        choice = window.prompt("Rock, paper, or scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            window.alert("Invalid choice! Please enter rock, paper, or scissors.");
        }
    }
}

/**
 * This function plays one round of rock paper sciccors
 */
function playRound(humanChoice, computerChoice) {
    // selects the #results div
    var results = document.querySelector("#results");
    var resultsText = "";


    if(humanChoice === computerChoice) {
        resultsText = ("You both chose " + humanChoice + ". It's a tie.")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsText = (`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        resultsText = (`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    results.textContent = resultsText + "\nCurrent score human: " + humanScore + "\nCurrent score computer: " + computerScore;

    if (humanScore === 5) {
        results.textContent += "\nYey, you win:) You are the first one to 5 points!";
        disableButtons();
    } else if (computerScore === 5) {
        results.textContent += "\nGame Over :( The computer is the first one to five points !";
        disableButtons();
    }
}

/**
 * the buttons are disabled when the game is won
 */
function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}



// here i add eventlisteners to each button
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});
