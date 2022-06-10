const startBtn = document.getElementById('btn');
const rock = document.getElementById('rock');
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const text = document.getElementById("computer-text");


const PICTURES = document.querySelectorAll(".images");
const CHOICES = document.querySelectorAll(".choices");
let CLOAK = document.getElementById("cloak");



let playerScore = 0;
let computerScore = 0;
let playerChoice;
let choiceCount = 0;
let pChoice = false;

const gameChoices = ["rock", "paper", "scissors"];


let gameStart;


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

function computerPlay() {

    

    return gameChoices[getRandomInt(2)];

};
let gameChoice = computerPlay();

function setPlayerChoice(evt) {
   

    if (evt.target.innerHTML == 'rock') {
        playerChoice = "rock";
        console.log("rock");
        playGame(computerPlay());
        pChoice = true;
        console.log("roc");

    } else if (evt.target.innerHTML == 'paper') {
        playerChoice = "paper";
        console.log("paper");
        playGame(computerPlay());
        pChoice = true;
        console.log("pap");

    } else if (evt.target.innerHTML == 'scissors') {
        playerChoice = "scissors";
        console.log("scissors");
        playGame(computerPlay());
        pChoice = true;
        console.log("scis");
    }

};


startBtn.addEventListener("click", changeOpac);

function changeOpac() {

    let opaclevel = 0;

    CLOAK.style.opacity = "1";
    

    text.innerHTML = "game start, pick your weapon";
    
    

}


rock.addEventListener("click", setPlayerChoice);


paper.addEventListener("click", setPlayerChoice);



scissors.addEventListener("click", setPlayerChoice);





function playGame(computerChoice) {

    let tie = (playerChoice == computerChoice);

    if (playerScore + computerScore < 5) {
    switch (true) {

        case (tie): text.innerHTML = "tie!";
        break;
        
        case(playerChoice == "rock" && computerChoice == "scissors"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        playerChoice = "";
        pChoice = false;
        break;

        case (playerChoice == "paper" && computerChoice == "rock"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        playerChoice = "";
        pChoice = false;
        break;

        case (playerChoice == "scissors" && computerChoice == "paper"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        playerChoice = "";
        pChoice = false;
        break;

        case (playerChoice == "rock" && computerChoice == "paper"): computerScore++; 
        text.innerHTML = "loss, your Score is: " + playerScore + "and mine is: " + computerScore;
        break;

        case (playerChoice == "paper" && computerChoice == "scissors"): computerScore++;
        text.innerHTML = "loss, your Score is: " + playerScore + "and mine is: " + computerScore;
        break;

        case(playerChoice == "scissors" && computerChoice == "rock"): computerScore++;
        text.innerHTML = "loss, your Score is: " + playerScore + "and mine is: " + computerScore;
        break;

        
    }
    }

    if (playerScore + computerScore >= 5) {

        if (playerScore > computerScore) {
            text.innerHTML = "You Win! your score: " + playerScore + " my Score: " + computerScore;
        } else {
            text.innerHTML = "You Lose! your score: " + playerScore + " my Score: " + computerScore;
        }

    }

}

function gameMaster() {

    for (i = 0; i < 5; i++) {
        playGame(computerPlay());
        
    }
    console.log("score is: " + playerScore/computerScore);
}


