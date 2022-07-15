let scoreWin = 0;
let scoreLoss = 0;
let scoreTie = 0;
let round = 0;

const validPlays = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});

function playRound(playerSelection, computerSelection) {

    document.getElementById("playerHand").innerHTML = '<img src="./img/'+playerSelection+'.png" />';
    document.getElementById("computerHand").innerHTML = '<img src="./img/'+computerSelection+'.png" />';

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

/*function playerPick() {
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
}*/

function game(id) {
    let result = playRound(id, computerPlay());
    round += 1;
    switch (result) {
        case 'W':
            document.getElementById("score").innerHTML = "You won!";
            scoreWin += 1;
            break;
        case 'L': 
            document.getElementById("score").innerHTML = "You lost!";
            scoreLoss += 1;
            break;
        case 'T': 
            document.getElementById("score").innerHTML = "You tied!";
            scoreTie += 1;
            break;
    }
    document.getElementById("round").innerHTML = "Round "+round;

    document.getElementById("playerscore").innerHTML = "Player: " + scoreWin;
    document.getElementById("computerscore").innerHTML = "Computer: " + scoreLoss;
/*const container = document.querySelector('#results');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Wins: " + scoreWin + " Lost: " + scoreLoss + " Tied: " + scoreTie + " Rounds: " + round;

container.appendChild(content);*/
}


