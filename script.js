function playRound(playerSelection, computerSelection) {
    console.log("Player:"+playerSelection)
    console.log("Computer:"+computerSelection)
    if (playerSelection == computerSelection) {
        console.log("Tie!")
    }
}

function computerPlay() {
    let randNum = Math.floor(Math.random()*3)
    return validPlays[randNum]
}
function playerPick() {
    var isvalidpick = false
    while (isvalidpick != true) {
        var pick = prompt("Your selection:").toLocaleLowerCase()
        var isvalidpick = validatePlay(pick)
    }
    return pick
}
function validatePlay(play) {
    if (validPlays.indexOf(play) >= 0) { // Check if player's pick is valid
        return true
    }
    return false
}
function game() {
    for (let i = 0; i < 2; i++) { // play 2 rounds for now
        playRound(playerPick(), computerPlay());
    }
}

const validPlays = ["rock", "paper", "scissors"]
//console.log(playRound(playerSelection, computerSelection));
//console.log(computerPlay())
game();