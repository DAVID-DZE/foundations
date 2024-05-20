
let humanScore = 0;
let computerScore = 0;

function resetGame (){
    humanScore = 0;
    computerScore = 0;
    const log = document.getElementById("score");
    log.textContent = 'Human: ' + humanScore + ' Computer: ' + computerScore;
}

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

function playRound(humanChoice, computerChoice) {
    const roundchoises = document.getElementById("roundchoises");
    if (humanChoice === computerChoice){
        roundchoises.textContent = 'It\'s a tie! Both chose ' + humanChoice;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        roundchoises.textContent = 'You win! Rock beats scissors.';
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        roundchoises.textContent = 'You win! Paper beats rock.';
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        roundchoises.textContent = 'You win! Scissors beats paper.';
        humanScore++;
    } else {
        roundchoises.textContent = 'You lose! ' + computerChoice + ' beats ' + humanChoice + '.';
        computerScore++;
    }

    const log = document.getElementById("score");
    log.textContent = 'Human: ' + humanScore + ' Computer: ' + computerScore;

    if(humanScore == 5)
    {
        alert("You have reaches 5 points. You won the game!");
        resetGame();
    }
    else if(computerScore == 5)
    {
        alert("Opponent has reached 5 points. You have lost the game");
        resetGame();
    }
}

function startRound (e){
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
}

function playGame() {
    const choises = document.querySelectorAll(".choise");

    choises.forEach((button) => {
        button.addEventListener("click", startRound);
    });
}

playGame();