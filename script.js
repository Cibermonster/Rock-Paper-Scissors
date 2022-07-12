function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "T"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "L"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "L"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "L"
    } else {
        return "W"
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
        let result = playRound(playerPick(), computerPlay());
        switch (result) {
            case 'W': console.log("WIN")
            break;
            case 'L': console.log("LOST")
            break;
            case 'T': console.log("TIE")
            break;
        }
        
    }
}

const validPlays = ["rock", "paper", "scissors"]
game();