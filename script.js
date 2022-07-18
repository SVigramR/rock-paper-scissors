console.log("Rock-Paper-Scissors");
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// Selecting scoreboard
const userScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');

// selecting user buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Selecting result
const resultDiv = document.querySelector('.result');

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor((Math.random() * 3));
    return choices[randomChoice];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let choices = playerSelection + computerSelection;
    let result = ''
    switch (choices) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result = "win";
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result = "lose";
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            result = "draw";
            break;
    }

    console.log(result);
    console.log(playerScore, computerScore, draw);
    if (result === "win") {
        playerScore++;
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        if (playerScore === 5) {
            resultDiv.textContent = "Hurray! Player Won.";
            rock.setAttribute("disabled", 1);
            paper.setAttribute("disabled", 1);
            scissors.setAttribute("disabled", 1);        }
    } else if (result === "lose") {
        computerScore++;
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        if (computerScore === 5) {
            resultDiv.textContent = "Computer Won, Don't Lose Hope.";
            rock.setAttribute("disabled", 1);
            paper.setAttribute("disabled", 1);
            scissors.setAttribute("disabled", 1);
        }
    } else {
        draw++;
        resultDiv.textContent = "It's a Draw!"
    }

    userScore.textContent = playerScore;
    compScore.textContent = computerScore;

}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    resultDiv.textContent = "CLick to Start!!!";

    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");
}

rock.addEventListener('click', function () {
    playRound('rock');
});
paper.addEventListener('click', function () {
    playRound('paper');
});
scissors.addEventListener('click', function () {
    playRound('scissors');
});