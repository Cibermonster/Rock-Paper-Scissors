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
}


