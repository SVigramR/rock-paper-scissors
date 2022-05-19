console.log("Rock-Paper-Scissors");

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor((Math.random() * 3));
    return choices[randomChoice];
}

let playerChoice = prompt("Type your choice: ").toLowerCase();
let computerChoice = computerPlay();
console.log(playRound(playerChoice, computerChoice));

function playRound(playerSelection, computerSelection) {
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
    return result ;
}

