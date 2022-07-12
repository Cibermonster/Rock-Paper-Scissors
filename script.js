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
        let pick = prompt("Your selection:").toLocaleLowerCase()
        var isvalidpick = validatePlay(pick)
    }
}
function validatePlay(play) {
    if (validPlays.indexOf(play) >= 0) { // Check if player's pick is valid
        return true
    }
    return false
}

const validPlays = ["rock", "paper", "scissors"]

const playerSelection = playerPick();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
console.log(computerPlay())