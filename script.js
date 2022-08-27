let options = ["rock", "paper", "scissor"];
let playerPoints = 0;
let computerPoints = 0;
let welcomeText = 'Rock Paper Scissor'
let i = 0;


function typeWriter() {
    if (i < welcomeText.length) {
      document.querySelector(".welcome").innerHTML += welcomeText.charAt(i);
      i++;
      setTimeout(typeWriter, 110);
    }
    return;
}

function getComputerChoice(){
      let choice = Math.floor(Math.random()*options.length);
      return options[choice];
}

function getSelection(e) {
    // get computer selection
    let computerSelection = getComputerChoice();

    // get player selection
    if(e.target.classList.contains("rock")){
        playerSelection = "Rock";
        }
    else if(e.target.classList.contains("paper")){
        playerSelection = "Paper";
        }
    else{
        playerSelection = "Scissor";
    }

    playRound(playerSelection, computerSelection);
    return;
}    

function playRound(playerSelection, computerSelection){
    // find the winner
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        message.textContent = `Tie!`;
        score.textContent = `${playerPoints}:${computerPoints}`;

        return;
      }

    // winning
    else if(
        (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR") || 
        (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")){
        
        playerPoints = playerPoints + 1;
        if (playerPoints === 5){
            score.textContent = `${playerPoints}:${computerPoints}`;
            message.textContent = `You won the game!`;
        }else{
            message.textContent =  `${playerSelection} beats ${computerSelection}`
            score.textContent = `${playerPoints}:${computerPoints}`;
            return;
        }
    }
    // losing
    else{
        computerPoints = computerPoints + 1;
        if(computerPoints === 5){
            score.textContent = `${playerPoints}:${computerPoints}`;
            message.textContent = `You lost the game!`;
        }else{
            message.textContent =  `${playerSelection} loses to ${computerSelection}`;
            score.textContent = `${playerPoints}:${computerPoints}`;
            return;
        }
       
    }
}
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
window.onload = function(){
    typeWriter();
};
buttons.forEach((button) => {
    button.addEventListener('click', getSelection)
});

