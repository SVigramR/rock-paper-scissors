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
    let choices = playerSelection + computerPlay();
    let result = ''
    switch (choices) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result = "win";
            playerScore++;
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result = "lose";
            computerScore++;
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            result = "draw";
            draw++;
            break;
    }

    console.log(result);
    console.log(playerScore, computerScore, draw);
}

function game() {
    rock.addEventListener('click', function(){
        playRound('rock');
    });
    paper.addEventListener('click', function(){
        playRound('paper');
    });
    scissors.addEventListener('click', function(){
        playRound('scissors');
    });
}

game();