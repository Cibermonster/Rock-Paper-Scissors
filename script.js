function playRound(playerSelection, computerSelection) {
    //play round stuff
}

function computerPlay() {
    let randNum = Math.floor(Math.random()*3)
    return validPlays[randNum]
}
function playerPick() {
    var isvalidpick = false
    while (isvalidpick != true) {
        let pick = prompt("Your selection:")
        var isvalidpick = validatePlay(pick)
    }
}
function validatePlay(play) {
    if (validPlays.indexOf(play) >= 0) {
        return true
    }
    return false
}

const validPlays = ["Rock", "Paper", "Scissors"]

const playerSelection = playerPick();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
console.log(computerPlay())