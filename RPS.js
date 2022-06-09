const startBtn = document.getElementById('btn');
const rock = document.getElementById('rock');
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



const PICTURES = document.querySelectorAll(".images");
const CHOICES = document.querySelectorAll(".choices");
let CLOAK = document.getElementById("cloak");


let gameChoice = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let choiceCount = 0


let gameStart;


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

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

};


startBtn.addEventListener("click", changeOpac);

function changeOpac() {
    CLOAK.style.opacity = "1";
    gameMaster();

}


rock.addEventListener('click', getRock );

function getRock() {
    playerChoice = "rock";
    console.log("rockget");
    choiceCount++;
    if (choiceCount < 5) {
        gameStart = true;

    }
    // set HTML of textbox
}

paper.addEventListener("click", getPaper);

function getPaper() {
    playerChoice = "paper";
    console.log("paperget");
    choiceCount++;
    if (choiceCount < 5) {
        gameStart = true;

    }
    // set HTML of textbox
}

scissors.addEventListener("click", getScissors);

function getScissors() {
    playerChoice = "scissors";
    console.log("scisget");

    choiceCount++;
    if (choiceCount < 5) {
        gameStart = true;

    }
    // set HTML of textbox
}

// */



function playGame() {

    

    let pScore;
    let cScore;

    if (choiceCount > 0) {

    let tie = (playerChoice.toLowerCase() == gameChoice.toLowerCase());

    switch(true) {

        case (tie): console.log("tie");
        break;

        case (playerChoice.toLowerCase() == "scissors" && gameChoice.toLowerCase() == 'paper'): console.log('win');
        console.log(playerChoice + " beats " + gameChoice);
        pScore = true;
        playerScore++;
        break;

        case (playerChoice.toLowerCase() == "paper" && gameChoice.toLowerCase() == "rock"): console.log("win");
        console.log(playerChoice + " beats " + gameChoice);
        pScore = true;
        playerScore++;
        break;

        case (playerChoice.toLowerCase() == "rock" && gameChoice.toLowerCase() == "scissors"): console.log("win");
        console.log(playerChoice + " beats " + gameChoice);
        playerScore++;
        pScore = true;
        break;

        case (playerChoice.toLowerCase() == "scissors" && gameChoice.toLowerCase() == "rock") : console.log("loss")
        console.log(gameChoice + " beats " + playerChoice);
        computerScore++;
        pScore = false;
        break;

        case (playerChoice.toLowerCase() == "paper" && gameChoice.toLowerCase() == "scissors"): console.log("loss");
        console.log(gameChoice + " beats " + playerChoice);
        computerScore++;
        pScore = false;
        break;

        case (playerChoice.toLowerCase() == "rock" && gameChoice.toLowerCase() == "paper"): console.log("loss");
        console.log(gameChoice + " beats " + playerChoice);
        computerScore++;
        pScore = false;
        break;
    }
    return pScore;
    }
}

function gameMaster() {

    for (i = 0; i < 5; i++) {
        playGame();
    }
    console.log("score is: " + playerScore/computerScore);
}

