console.log("Rock-Paper-Scissors");

function computerPlay() {
    let compOutput = Math.floor((Math.random() * 3) + 1);
    if (compOutput === 1) {
        return "rock";
    } else if (compOutput === 2) {
        return "paper";
    } else if (compOutput === 3) {
        return "scissors";
    } else {
        console.log("None")
    }
}

// console.log("Computer's choice:", computerPlay())

let playerChoice = prompt("Type your choice: ").toLowerCase();
let computerChoice = computerPlay();
// console.log(playRound(playerChoice, computerChoice));

function playRound(playerSelection, computerSelection) {
    if (playerSelection==='rock' && computerSelection==='scissors') {
        return "You Won! Rock beats Scissors"
    } else if (playerSelection==='paper' && computerSelection==='rock') {
        return "You Won! Paper beats Rock"
    } else if (playerSelection==='scissors' && computerSelection==='paper') {
        return "You Won! Scissors beats Paper"
    } else if (playerSelection==='scissors' && computerSelection==='rock') {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection==='rock' && computerSelection==='paper') {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection==='paper' && computerSelection==='scissors') {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection==='paper' && computerSelection==='paper') {
        return "DRAW"
    } else if (playerSelection==='rock' && computerSelection==='rock') {
        return "DRAW"
    } else if (playerSelection==='Scissors' && computerSelection==='Scissors') {
        return "DRAW"
    } else {
        return "Invalid input"
    }
}

function game(playerChoice, computerChoice){
    for (let i = 0; i < 5; i++){
    
    }
}

console.log(game(playerChoice,computerChoice));