//UI Buttons
let rock_button = document.getElementById('Rock');
let scissors_button = document.getElementById('Scissors');
let paper_button = document.getElementById('Paper');

//Adding Event Listeners
rock_button.addEventListener('click', () => playGame('rock'));
scissors_button.addEventListener('click', () => playGame('scissors'));
paper_button.addEventListener('click', () => playGame('paper'));

function playGame(userChoice){

    let computerChoice = getComputerChoice();
    let results = '';

    //User Rock Choice Branch
    if (userChoice === 'rock'){
        if (computerChoice === 'rock'){
            alert(results = `Computer: ${computerChoice} 
                        You: ${userChoice}`);
        }
        else if (computerChoice === 'paper'){
            alert(results = `Computer: ${computerChoice}
                        You:  ${userChoice}`);
        }
        else {
            alert(results = `Computer: ${computerChoice}
                        You: ${userChoice}`);
        }
    }

    //User Paper Choice Branch
    else if (userChoice === 'paper'){
         if (computerChoice === 'rock'){
            alert(results = `Computer: ${computerChoice} 
                        You: ${userChoice}`);
        }
        else if (computerChoice === 'paper'){
            alert(results = `Computer: ${computerChoice}
                        You:  ${userChoice}`);
        }
        else {
            alert(results = `Computer: ${computerChoice}
                        You: ${userChoice}`);
        }
    }
        
    //User Scissors Choice Branch
   else if (userChoice === 'scissors'){
           if (computerChoice === 'rock'){
            alert(results = `Computer: ${computerChoice} 
                        You: ${userChoice}`);
            }
            else if (computerChoice === 'paper'){
            alert(results = `Computer: ${computerChoice}
                        You:  ${userChoice}`);
            }
            else {
            alert(results = `Computer: ${computerChoice}
                        You: ${userChoice}`);
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
