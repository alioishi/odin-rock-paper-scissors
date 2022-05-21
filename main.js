/*
pseudocode
ask for user move
generate random move
compare moves to determine winner
output winner
*/

// ask for user input. returns in lowercase for consistency with rest of code
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