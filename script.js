let options = ["rock", "paper", "scissor"];

function getComputerChoice(){
      let choice = Math.floor(Math.random()*options.length);
      return options[choice];
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
      if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
            return "Tie!";
      }
      else if(
            (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR") || 
            (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER") ||
            (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")){
            let message =  `${playerSelection} beats ${computerSelection}. You won!`
            return message;
      }
      else if(
            (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") || 
            (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "ROCK") ||
            (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSOR")){
            let message = `${computerSelection} beats ${playerSelection}. You lost!`
            return message;
      }
}    
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));