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
    return;
}    

function playRound(playerSelection, computerSelection){

    // find the winner
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        message.textContent = `It's a Tie! Score: ${playerPoints}:${computerPoints}`;
        return;
      }

    // winning
    else if(
        (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR") || 
        (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")){
        
        playerPoints = playerPoints + 1;
        message.textContent =  `${playerSelection} beats ${computerSelection}. You won! Score: ${playerPoints}:${computerPoints}`;
        return;
    }

    // losing
    else{
        computerPoints = computerPoints + 1;
        message.textContent =  `${playerSelection} loses to ${computerSelection}. You lost! Score: ${playerPoints}:${computerPoints}`;
        return;
    }
}
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getSelection)
});

