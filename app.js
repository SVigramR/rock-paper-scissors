console.log("Rock-Paper-Scissors");

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor((Math.random() * 3));
    return choices[randomChoice];
}

// console.log("Computer's choice:", computerPlay())

let playerChoice = prompt("Type your choice: ").toLowerCase();
let computerChoice = computerPlay();
// console.log(playRound(playerChoice, computerChoice));

function playRound(playerSelection, computerSelection) {
    let choices = playerSelection + computerSelection;
    switch (choices) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose();
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw();
            break;
        default:
            return "Invalid Input"
    }

}

// function game(playerChoice, computerChoice){
//     for (let i = 0; i < 5; i++) {
//         let x[i] = playRound(playerChoice, computerChoice);
//         console.log(x);
//      }
// }
