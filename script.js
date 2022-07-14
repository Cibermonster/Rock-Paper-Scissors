let scoreWin = 0;
let scoreLoss = 0;
let scoreTie = 0;
let round = 0;
let totalRounds = 2;

const validPlays = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});

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

function game(id) {
    
    let result = playRound(id, computerPlay());
    switch (result) {
        case 'W': 
            console.log("WIN")
            scoreWin += 1;
            break;
        case 'L': 
            console.log("LOST")
            scoreLoss += 1;
            break;
        case 'T': 
            console.log("TIE")
            scoreTie += 1;
            break;
    }
    if (round >= totalRounds) {
        // Game Over
    } else {
        round += 1;
    }
    
    console.log("Wins: " + scoreWin + " Lost: " + scoreLoss + " Tied: " + scoreTie + " Rounds: " + round)
}

//game();