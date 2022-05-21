// all returns in lowercase for consistency

let ROCK_INT = 0;
let ROCK_STR = "rock";
let PAPER_INT = 1;
let PAPER_STR = "paper"
let SCISSORS_INT = 2;
let SCISSORS_STR = "scissors";

let USER_WIN = 0;
let COMPUTER_WIN = 1;
let DRAW = 2;

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

function computerPlay() {
    return computerMoveRNG = Math.floor(Math.random()*3);
}

function playRound (userSelection, computerSelection) {
    let result;

    if (userSelection == computerSelection){
        alert("This round is a tie.");
        result = DRAW;
    }
    else if (userSelection == SCISSORS_INT){
        if (computerSelection == ROCK_INT){
            alert("You lose this round. Rock beats scissors.");
            result = COMPUTER_WIN;
        }
        else {
            alert("You win this round. Scissors beats paper.");
            result = USER_WIN;
        }
    }
    else if (computerSelection == SCISSORS_INT){
        if (userSelection == ROCK_INT){
            alert("You win this round. Rock beats scissors.");
            result = USER_WIN;
        }
        else {
            alert("You lose this round. Scissors beats paper.");
            result = COMPUTER_WIN;
        }
    }
    else {
        if (userSelection > computerSelection){
            alert(`You win this round. ${convertMoveIntToMoveStr(userSelection).slice(0,1).toUpperCase() + convertMoveIntToMoveStr(userSelection).slice(1)} beats ${convertMoveIntToMoveStr(computerSelection)}.`);
            result = USER_WIN;
        }
        else{
            alert(`You lose this round. ${convertMoveIntToMoveStr(computerSelection).slice(0,1).toUpperCase() + convertMoveIntToMoveStr(computerSelection).slice(1)} beats ${convertMoveIntToMoveStr(userSelection)}.`);
            result = COMPUTER_WIN;
        }
    }
}

function game(){
    let roundResult;
    let userWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; ++i){
        roundResult = playRound(getUserMove(), computerPlay());
        if(roundResult == USER_WIN){
            ++userWins;
        }
        else if (roundResult == COMPUTER_WIN){
            ++computerWins;
        }
    }

    if(userWins == computerWins){
        alert("Draw!");
    }
    else if (userWins > computerWins){
        alert("You win!");
    }
    else{
        alert("You lose!");
    }
}

game();