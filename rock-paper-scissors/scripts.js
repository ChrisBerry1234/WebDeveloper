//UI Buttons
let rock_button = document.getElementById('Rock');
let scissors_button = document.getElementById('Scissors');
let paper_button = document.getElementById('Paper');
let results_display = document.getElementById('results');
let getScore = document.getElementById('score')

//Adding Event Listeners
rock_button.addEventListener('click', () => playGame('rock'));
scissors_button.addEventListener('click', () => playGame('scissors'));
paper_button.addEventListener('click', () => playGame('paper'));


const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
//If nothing is in getScore, set everything to zero
localStorage.removeItem('score');

function playGame(userChoice){

    let computerChoice = getComputerChoice();
    
    //User Rock Choice Branch
    if (userChoice === 'rock'){
        if (computerChoice === 'rock'){
             displayResults(computerChoice, userChoice, 'tie');
        }else if (computerChoice === 'paper'){
            displayResults(computerChoice, userChoice, 'lose');
        }
        else {
            displayResults(computerChoice, userChoice, 'win');
        }
    }

    //User Paper Choice Branch
    else if (userChoice === 'paper'){
         if (computerChoice === 'rock'){
            displayResults(computerChoice, userChoice, 'win')
        }
         else if (computerChoice === 'paper'){
            displayResults(computerChoice, userChoice, 'tie');
        }
         else {
           displayResults(computerChoice, userChoice, 'lose');
        }
    }
        
    //User Scissors Choice Branch
   else if (userChoice === 'scissors'){
           if (computerChoice === 'rock'){
                displayResults(computerChoice, userChoice, 'lose');
            }
            else if (computerChoice === 'paper'){
                displayResults(computerChoice, userChoice, 'win');
            }
            else {
                displayResults(computerChoice, userChoice, 'tie');
            }
        }
    }

   

function getComputerChoice(){
    let randomNumber = Math.random();

    let computerChoice =''; 

    if (randomNumber >= 0 && randomNumber <= 1/3){    
        computerChoice = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber <= 2/3){
        computerChoice = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber <= 3/3){
        computerChoice = 'scissors';
    }
    return computerChoice;
}


function displayResults(computerChoice, userChoice, outcome) {
     
     let message = '';

     if (outcome === 'win'){
        message = "You Win";
        score.wins++;
     }
     else if (outcome === 'lose'){
        message = 'You Lose';
        score.losses++;
     }
     else{
        message = 'Tie Game';
        score.ties++;
     }
    
    results_display.innerHTML = `Computer: ${computerChoice} You:${userChoice}, ${message}`;

    localStorage.setItem('score', JSON.stringify(score));
    getScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
}