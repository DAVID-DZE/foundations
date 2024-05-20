
let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

function getHumanChoice (){
    var humanChoice = prompt('Please choose rock, paper, or scissors.');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log('It\'s a tie!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You win! Rock beats scissors.');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win! Paper beats rock.');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You win! Scissors beats paper.');
        humanScore++;
    } else {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice + '.');
        computerScore++;
    }
    console.log('Human: ' + humanScore + ' Computer: ' + computerScore);

}

function playGame() {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log('You win the game!');
    } else if (humanScore < computerScore){
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie!');
    }
}

playGame();