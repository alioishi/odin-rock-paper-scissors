/*
pseudocode

for 5 rounds
    ask for user move
    generate random move
    compare moves to determine round winner or draw
output winner as best 3 out of 5 unless there is a draw
sudden death
*/

// all returns in lowercase for consistency

let ROCK = 0;
let PAPER = 1;
let SCISSORS = 2;

function convertMoveStrToMoveInt(move) {
    return (move == "rock") ? ROCK :
        (move == "paper") ? PAPER : 
        SCISSORS;
}

function getUserMove() {
    let userMove = prompt("Rock, Paper, Scissors?");
    let userMoveCheck = userMove.toLowerCase();
    if (userMoveCheck == "rock" || userMoveCheck == "paper" || userMoveCheck == "scissors"){
        return convertMoveStrToMoveInt(userMoveCheck);
    }
    else{
        console.log(`${userMove} is not valid.` );
    }
}

function computerPlay() {
    return computerMoveRNG = Math.floor(Math.random()*3);
}
