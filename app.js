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

console.log("Computer's choice:", computerPlay())