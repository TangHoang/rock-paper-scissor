let options = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;
let welcomeMessage = 'ROCK  PAPER  SCISSORS'
let i = 0;

function typeWriter() {


    if (i < welcomeMessage.length) {
        document.querySelector(".welcome").innerHTML += welcomeMessage.charAt(i);
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
    // click animation
    let text = document.querySelector('.text');
    let clickButton;

    // get computer selection
    let computerSelection = getComputerChoice();

    // get player selection
    if(e.target.classList.contains("rock")){
        playerSelection = "Rock";
        clickButton = document.getElementById('rock')
        }
    else if(e.target.classList.contains("paper")){
        playerSelection = "Paper";
        clickButton = document.getElementById('paper')
        }
    else{
        playerSelection = "Scissors";
        clickButton = document.getElementById('scissors')
    }
    clickButton.classList.add('click');
    text.classList.add('text-animation');
    playRound(playerSelection, computerSelection);
    return;
}    

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('click');
    e.target.classList.remove('text-animation');
}

function playRound(playerSelection, computerSelection){
    // find the winner
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        text.textContent = `Tie!`;
        return;
      }

    // winning
    else if(
        (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") || 
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK")){
        
        playerPoints = playerPoints + 1;
        if (playerPoints === 5){
            playerScore.textContent = `${playerPoints}`;
            text.textContent = `You won the game!`;
        }else{
            text.textContent =  `${playerSelection} beats ${computerSelection}`
            playerScore.textContent = `${playerPoints}`;
            return;
        }
    }
    // losing
    else{
        computerPoints = computerPoints + 1;
        if(computerPoints === 5){
            computerScore.textContent = `${computerPoints}`;
            text.textContent = `You lost the game!`;
        }else{
            text.textContent =  `${playerSelection} loses to ${computerSelection}`;
            computerScore.textContent = `${computerPoints}`;
            return;
        }
       
    }
}
const score = document.querySelector('.score');
const text = document.querySelector('.text');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('button');

window.onload = function(){
    typeWriter();
};
buttons.forEach((button) => {
    button.addEventListener('click', getSelection)
});

buttons.forEach((button) => {
    button.addEventListener('transitionend', removeTransition)
});

text.addEventListener('transitionend', removeTransition);


