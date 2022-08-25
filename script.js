let options = ["rock", "paper", "scissor"];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
      let choice = Math.floor(Math.random()*options.length);
      return options[choice];
}

function getSelection(e) {

    // get computer selection
    let computerSelection = getComputerChoice();

    // get player selection
    if(e.target.classList.contains("rock")){
        playerSelection = "ROCK";
        }
    else if(e.target.classList.contains("paper")){
        playerSelection = "PAPER";
        }
    else{
        playerSelection = "SCISSOR";
    }

    playRound(playerSelection, computerSelection);
}    

function playRound(playerSelection, computerSelection){

    // find the winner
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        console.log("Tie!");
        return;
      }

    // winning
    else if(
        (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR") || 
        (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")){
        
        playerPoints = playerPoints + 1;
        let message =  `${playerSelection} beats ${computerSelection}. You won! Score: ${playerPoints}:${computerPoints}`
        console.log(message);
        return;
    }

    // losing
    else{
        computerPoints = computerPoints + 1;
        let message = `${playerSelection} loses to ${computerSelection}. You lost! Score: ${playerPoints}:${computerPoints}`
        console.log(message);
        return;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getSelection)
});

