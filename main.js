// all returns in lowercase for consistency

let ROCK_INT = 0;
let ROCK_STR = "rock";
let PAPER_INT = 1;
let PAPER_STR = "paper"
let SCISSORS_INT = 2;
let SCISSORS_STR = "scissors";

let USER_WIN_COUNT = 0;
let COMPUTER_WIN_COUNT = 0;
let ROUND_COUNT = 0;

function convertMoveStrToMoveInt(moveStr) {
    return (moveStr == ROCK_STR) ? ROCK_INT :
        (moveStr == PAPER_STR) ? PAPER_INT : 
        SCISSORS_INT;
}

function convertMoveIntToMoveStr(moveInt){
    return (moveInt == ROCK_INT) ? ROCK_STR :
    (moveInt == PAPER_INT) ? PAPER_STR : 
    SCISSORS_STR;
}

/*
function getUserMove() {
    let userMove = prompt("Rock, Paper, Scissors?");
    let userMoveCheck = userMove.toLowerCase();
    while (userMoveCheck != ROCK_STR && userMoveCheck != PAPER_STR && userMoveCheck != SCISSORS_STR){
        console.log(`${userMove} is not valid.` );
        userMove = prompt("Rock, Paper, Scissors?");
        userMoveCheck = userMove.toLowerCase();
    }
    return convertMoveStrToMoveInt(userMoveCheck);
}
*/

// generate 0, 1, or 2 to represent rock, paper, or scissors, respectively
function computerPlay() {
    return computerMoveRNG = Math.floor(Math.random()*3);
}

/* 
first check for tie, 
then check the result if one of the user or the computer has scissors and the other has rock 
        because the comparison is not as simple as the the remaining comparisons, 
then check the remaining comparisons, which is a simple greater than comparison
*/
function playRound (userSelection, computerSelection) {
    ++ROUND_COUNT;

    const div = document.createElement('div');

    if (userSelection == computerSelection){
        div.textContent = "This round is a tie.";
    }
    else if (userSelection == SCISSORS_INT && computerSelection == ROCK_INT){
        div.textContent = "You lose this round. Rock beats scissors.";
        ++COMPUTER_WIN_COUNT;
    }
    else if (computerSelection == SCISSORS_INT && userSelection == ROCK_INT){
        div.textContent = "You win this round. Rock beats scissors.";
        ++USER_WIN_COUNT;
    }
    else {
        if (userSelection > computerSelection){
            div.textContent = `You win this round. ${convertMoveIntToMoveStr(userSelection).slice(0,1).toUpperCase() + convertMoveIntToMoveStr(userSelection).slice(1)} beats ${convertMoveIntToMoveStr(computerSelection)}.`;
            ++USER_WIN_COUNT;
        }
        else{
            div.textContent = `You lose this round. ${convertMoveIntToMoveStr(computerSelection).slice(0,1).toUpperCase() + convertMoveIntToMoveStr(computerSelection).slice(1)} beats ${convertMoveIntToMoveStr(userSelection)}.`;
            ++COMPUTER_WIN_COUNT;
        }
    }

    document.body.appendChild(div);
}

function score(){
    const div = document.createElement('div');

    div.textContent = `Round ${ROUND_COUNT} Current Score: User-${USER_WIN_COUNT} Computer-${COMPUTER_WIN_COUNT}.`;
    document.body.appendChild(div);

    if(USER_WIN_COUNT == 5 || COMPUTER_WIN_COUNT == 5){
        const done = document.createElement('div');
        if(USER_WIN_COUNT == COMPUTER_WIN_COUNT){
            done.textContent = `Draw! Final Score: User-${USER_WIN_COUNT} Computer-${COMPUTER_WIN_COUNT}.\n\n`;
        }
        else if (USER_WIN_COUNT > COMPUTER_WIN_COUNT){
            done.textContent = `You win! Final Score: User-${USER_WIN_COUNT} Computer-${COMPUTER_WIN_COUNT}.\n\n`;
        }
        else{
            done.textContent = `You lose! Final Score: User-${USER_WIN_COUNT} Computer-${COMPUTER_WIN_COUNT}.\n\n`;
        }
        document.body.appendChild(done);

        const newline = document.createElement('br');
        document.body.appendChild(newline);

        USER_WIN_COUNT = 0;
        COMPUTER_WIN_COUNT = 0;
        ROUND_COUNT = 0;
    }
}

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener('click', function() {
    playRound(ROCK_INT, computerPlay());
    score();
});

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener('click', function() {
    playRound(PAPER_INT, computerPlay());
    score();
});

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener('click', function() {
    playRound(SCISSORS_INT, computerPlay());
    score();
});