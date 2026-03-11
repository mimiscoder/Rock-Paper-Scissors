let humanScore, computerScore;
humanScore = computerScore = 0;

function getComputerChoice() {
    // Get the random number(0-2)
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0) {
        return "Rock";
    }else if(randomNumber === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function getHumanChoice(roundNumber) {
    let userChoice = prompt(`Round ${roundNumber}: Please type rock, paper, or scissors:`);
    return userChoice;
}

// Select the winner or loser and assign the score accordingly in a single round.
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        console.log(`You win this round! ${humanChoice} beat ${computerChoice}`);
    }else if(humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1;
        console.log(`You lose this round! ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === computerChoice) {
        computerScore += 1;
        humanScore += 1;
        console.log(`It's a tie this round! ${computerChoice} ties with ${humanChoice}`);
    }else {
        console.log("UNKOWN OPERATION!");
    }
}

function finallWinner(finallHumanScores, finallComputerScores) {
    if(finallHumanScores > finallComputerScores) {
        console.log(
            `Yes! You're the winner. \n
            Your Final Scores: ${finallHumanScores}\n
            Computer Final Scores: ${finallComputerScores}`
        );
    }else{
        console.log(
            `"Unfortunately! You lost!". \n
            Your Final Scores: ${finallHumanScores}\n
            Computer Final Scores: ${finallComputerScores}`
        );
    }
}

buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", () => {
    alert("WORKING FINE!")
}))

playGame();

