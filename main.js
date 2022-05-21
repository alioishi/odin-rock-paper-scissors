/*
pseudocode

for 5 rounds
    ask for user move
    generate random move
    compare moves to determine round winner or draw
output winner unless there is a draw
*/

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
    if (userSelection == computerSelection){
        return DRAW;
    }
    else if (userSelection == SCISSORS){
        return (computerSelection == ROCK) ? COMPUTER_WIN : USER_WIN;
    }
    else if (computerSelection == SCISSORS){
        return (userSelection == ROCK) ? USER_WIN : COMPUTER_WIN;
    }
    else {
        return (userSelection > computerSelection) ? USER_WIN : COMPUTER_WIN;
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