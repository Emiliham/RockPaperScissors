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
 * This function finds the winner of a round and then updates the scores
 */
function getRoundWinner(humanChoice, computerChoice) {
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
    
    return resultsText;
}

/**
 * Shows the result of a round and handles the end of the game
 */
function getResult(roundResultText) {
    var results = document.querySelector("#results");
    var resultsText = "";
    
    resultsText = roundResultText + "\nCurrent score human: " + humanScore + "\nCurrent score computer: " + computerScore;

    if (humanScore === 5) {
        resultsText += "\nYey, you win:) You are the first one to 5 points!";
        disableButtons();
    } else if (computerScore === 5) {
        resultsText += "\nGame Over :( The computer is the first one to five points !";
        disableButtons();
    }
    
    results.textContent = resultsText;
}


/**
 * This function plays one round of rock paper scissors
 */
function playRound(humanChoice, computerChoice) {
    var roundResult = getRoundWinner(humanChoice, computerChoice);
    getResult(roundResult);
}


/**
 * the buttons are disabled when the game is won
 */
function disableButtons() {
    document.querySelectorAll(".imageRPS").forEach(img => {
        img.style.pointerEvents = "none";
        img.style.opacity = "0.5";
    });
}


// here i add eventlisteners to each button/image
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
