/*
pseudocode

for 5 rounds
    ask for user move
    generate random move
    compare moves to determine round winner or draw
output winner as best 3 out of 5 unless there is a draw
*/

// all returns in lowercase for consistency

function getUserMove (){
    let userMove = prompt("Rock, Paper, Scissors?");
    let userMoveCheck = userMove.toLowerCase();
    if (userMoveCheck == "rock" || userMoveCheck == "paper" || userMoveCheck == "scissors"){
        return userMoveCheck;
    }
    else{
        console.log(`${userMove} is not valid.` );
    }
}

function computerPlay(){
    let computerMoveRNG = Math.floor(Math.random()*3);
  
    return (computerMoveRNG == 0) ? "rock" : 
    (computerMoveRNG == 1) ? "paper" : 
    "scissors";
}
