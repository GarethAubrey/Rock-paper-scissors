// Rock Paper scissors spock

const choices = ["rock", "paper", "scissors",];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 4)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a draw!";
    }
    else{
        switch(playerChoice){
            case "rock":
            result = (computerChoice === "scissors") ? "You win!" : "You lose!";
            break;
            case "paper":
            result = (computerChoice === "rock") ? "You win!" : "You lose!";
            break;
            case "scissors":
            result = (computerChoice === "paper") ? "You win!" : "You lose!";
            break;
        }
    }

    
    
}