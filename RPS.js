
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function computerPlay() {
    let choice = getRandomInt(3);

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }

}

function gameMaster() {

    let playerChoice = prompt("Rock, Paper, Scissors !!!");

    let gameChoice = computerPlay();
    console.log("choose rock paper or scissors!");

    let tie = (playerChoice.toLowerCase() == gameChoice.toLowerCase());

    switch(true) {

        case (tie): console.log("tie");
        break;

        case (playerChoice.toLowerCase() == "scissors" && gameChoice.toLowerCase() == 'paper'): console.log('win');
        console.log(playerChoice + " beats " + gameChoice);
        break;

        case (playerChoice.toLowerCase() == "paper" && gameChoice.toLowerCase() == "rock"): console.log("win");
        console.log(playerChoice + " beats " + gameChoice);
        break;

        case (playerChoice.toLowerCase() == "rock" && gameChoice.toLowerCase() == "scissors"): console.log("win");
        console.log(playerChoice + " beats " + gameChoice);
        break;

        case (playerChoice.toLowerCase() == "scissors" && gameChoice.toLowerCase() == "rock") : console.log("loss")
        console.log(gameChoice + " beats " + playerChoice);
        break;

        case (playerChoice.toLowerCase() == "paper" && gameChoice.toLowerCase() == "scissors"): console.log("loss");
        console.log(gameChoice + " beats " + playerChoice);
        break;

        case (playerChoice.toLowerCase() == "rock" && gameChoice.toLowerCase() == "paper"): console.log("loss");
        console.log(gameChoice + " beats " + playerChoice);
        break;
    }
}

let i = 0;
while (i < 5) {
    gameMaster();
    i++;
}
i = 0;