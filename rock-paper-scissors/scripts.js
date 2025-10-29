//Global variables
let computerWins = 0;
let rounds = 0;

//UI Buttons
let rock_button = document.getElementById('Rock');
let scissors_button = document.getElementById('Scissors');
let paper_button = document.getElementById('Paper');
let results_display = document.getElementById('results');
let getScore = document.getElementById('score');
let startGame = document.getElementById('start-game');
let reset = document.getElementById('reset');

//Adding Event Listeners
rock_button.addEventListener('click', () => playGame('rock'));
scissors_button.addEventListener('click', () => playGame('scissors'));
paper_button.addEventListener('click', () => playGame('paper'));

startGame.addEventListener("click", () => {
    alert("There are only five rounds");
    rock_button.disabled = false;
    paper_button.disabled = false;
    scissors_button.disabled = false;
})

reset.addEventListener("click", () => {
    localStorage.removeItem('score');// remove score from local storage
    //reset score object in memory
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    getScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    results_display.innerHTML = '';
    rounds = 0;
})

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

//When game loads, disable buttons first
rock_button.disabled = true;
paper_button.disabled = true;
scissors_button.disabled = true;


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
        
        rounds++;
     }
     else if (outcome === 'lose'){
        message = 'You Lose';
        score.losses++;
        computerWins++;
        rounds++;
     }
     else{
        message = 'Tie Game';
        score.ties++;
        rounds++;
     }
    
    results_display.innerHTML = `<p>Round${rounds}</p> Computer: <img src="images/${computerChoice}.jpeg" width = "150px" height = "150px"> You: <img src = "images/${userChoice}.jpeg" width ="150px" height = "150px"> <<br> 
    ${message}`;

    localStorage.setItem('score', JSON.stringify(score));
    getScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    //Branch statement for rounds
    if (rounds >= 5){
        if(computerWins > score.wins){
            alert(`Computer Wins, Score: Computer: ${computerWins} User:${score.wins}`);
        }
        else{
            alert(`User Wins, Score: Computer: ${computerWins} User:${score.wins}`);
        }
    }
}