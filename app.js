console.log("Rock-Paper-Scissors");
let playerChoice;
let computerChoice;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor((Math.random() * 3));
    return choices[randomChoice];
}



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

    if (result === "win") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "lose") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (result === "draw") {
        return "It's a Draw";
    } else {
        return "Invalid Input";
    }
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Type your Choice: ");
        computerChoice = computerPlay();

        let round = playRound(playerChoice, computerChoice);
        console.log(round);

        if (round.includes("Win")){
            playerScore++;
        } else if (round.includes("Lose")) {
            compScore++;
        } else {
            draw++;
        }

        if (compScore === 3 || playerScore === 3){
            break
        }
    }

    if (playerScore > compScore) {
        console.log("Hurray! Player Won.");
    } else if (playerScore < compScore) {
        console.log("Computer Won, Don't Lose Hope.");
    } else if (playerScore === compScore) {
        console.log("DRAW");
    }
    return;
}

game();
