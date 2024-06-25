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

    

    return gameChoices[getRandomInt(3)];

};
// let gameChoice = computerPlay();

function setRock(evt) {
   

    
        playerChoice = "rock";
        console.log("rock");
        playGame("rock");
        pChoice = true;
        
    
    
};

function setPaper(evt) {
    
        playerChoice = "paper";
        console.log("paper");
        playGame("paper");
        pChoice = true;
        console.log("pap");
        

}

function setScissors(evt) {
    
        playerChoice = "scissors";
        console.log("scissors");
        playGame("scissors");
        pChoice = true;
        console.log("scis");
        
    
}

startBtn.addEventListener("click", changeOpac);

function changeOpac() {

    let opaclevel = 0;

    CLOAK.style.opacity = "1";
    

    text.innerHTML = "game start, pick your weapon";
    
    

}


rock.addEventListener("click", setRock);


paper.addEventListener("click", setPaper);



scissors.addEventListener("click", setScissors);





function playGame(c) {
    let computer_choice = computerPlay();
    let tie = (c === computer_choice);
    console.log(computer_choice);
    if (playerScore + computerScore < 5) {
    switch (true) {

        case (tie): text.innerHTML = "tie!";
        console.log(c);
        console.log();
        break;
        
        case(c === "rock" && computer_choice == "scissors"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        playerChoice = "";
        pChoice = false;
        break;

        case (c === "paper" && computer_choice == "rock"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        
        pChoice = false;
        break;

        case (c === "scissors" && computer_choice == "paper"): playerScore++;
        text.innerHTML = "win, your Score is: " + playerScore + "and mine is: " + computerScore;
        playerChoice = "";
        pChoice = false;
        break;

        case (c === "rock" && computer_choice == "paper"): computerScore++; 
        text.innerHTML = "loss, your Score is: " + playerScore + "and mine is: " + computerScore;
        break;

        case (c == "paper" && computer_choice == "scissors"): computerScore++;
        text.innerHTML = "loss, your Score is: " + playerScore + "and mine is: " + computerScore;
        break;

        case(c === "scissors" && computer_choice == "rock"): computerScore++;
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




