function playRound(playerSelection, computerSelection) {
    //let pick = prompt("Your selection:")
}

function computerPlay() {
    let randNum = Math.floor(Math.random()*3)
    return validPlays[randNum]
}

const validPlays = ["Rock", "Paper", "Scissors"]

const playerSelection = "rock";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
console.log(computerPlay())