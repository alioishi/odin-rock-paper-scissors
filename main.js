/*
pseudocode

for 5 rounds
    ask for user move
    generate random move
    compare moves to determine round winner or draw
output winner unless there is a draw
*/

// all returns in lowercase for consistency

let ROCK = 0;
let PAPER = 1;
let SCISSORS = 2;

let USER_WIN = 0;
let COMPUTER_WIN = 1;
let DRAW = 2;

function convertMoveStrToMoveInt(move) {
    return (move == "rock") ? ROCK :
        (move == "paper") ? PAPER : 
        SCISSORS;
}

function getUserMove() {
    let userMove = prompt("Rock, Paper, Scissors?");
    let userMoveCheck = userMove.toLowerCase();
    while (userMoveCheck != "rock" && userMoveCheck != "paper" && userMoveCheck != "scissors"){
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