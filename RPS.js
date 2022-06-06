function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let playerChoice = document.getElementById("input");

document.write(playerChoice);

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
    
}