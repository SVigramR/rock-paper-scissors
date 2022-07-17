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

// Showing result
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
    } else if (result === "lose") {
        computerScore++;
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        draw++;
        resultDiv.textContent = "It's a Draw!"
    }

    userScore.textContent = playerScore;
    compScore.textContent = computerScore;

    if (playerScore === 5) {
        resultDiv.textContent = "Hurray! Player Won.";
    } else if (computerScore === 5) {
        resultDiv.textContent = "Computer Won, Don't Lose Hope.";
    }
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

// function rmEventListener() {
//     rock.removeEventListener('click', function () {
//         playRound('rock');
//     });
//     paper.removeEventListener('click', function () {
//         playRound('paper');
//     });
//     scissors.removeEventListener('click', function () {
//         playRound('scissors');
//     });
// }

