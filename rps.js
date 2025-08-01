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
         * Shows the computer's choice as a popup image
         */
function showComputerChoice(computerChoice) {
    // finding the screen background and the computer-choice
    var screenCover = document.querySelector("#screen-cover");
    var popupImage = document.querySelector("#computer-choice");
    
    // find out which image to show based on the computers random choice
    var imageSrc = "";
    if (computerChoice === "rock") {
        imageSrc = "./images/stone.png";
    } else if (computerChoice === "paper") {
        imageSrc = "./images/paper.png";
    } else {
        imageSrc = "./images/scissors.png";
    }
    
    popupImage.src = imageSrc;
    popupImage.alt = computerChoice;
    
    // Show the popup
    screenCover.style.display = "flex";
}

/**
 * Here it hides the whole screencover with popup image
 * When the parent is removed, all children are also removed
*/
function hideComputerChoice() {
    // here it finds the overlay 
    var screenCover = document.querySelector("#screen-cover");
    // then here it hides it
    screenCover.style.display = "none";
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
    // First show the computer's choice
    showComputerChoice(computerChoice);
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

 // Close popup when clicked anywhere
document.querySelector("#screen-cover").addEventListener("click", function() {
    hideComputerChoice();
});


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
