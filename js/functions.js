let compChoice;
let userChoice;
let player;
let randomNum;
let winner;

// Random Numbers (Inclusive 0-Exclusive range)
// FUNCTION: Generate a random number between 0 and 3
function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}

// Swicth statements
function chooseMove(randomNum){
switch(randomNum){
    case 0:
        return  "rock";
        break;
    case 1:
        return  "paper";
        break;
    case 2:
        return  "scissors";
        break;
    default:
        return "error";
        break;
    }
}
// Comparisons
function determineWinner(){
if(userChoice === "rock" && compChoice === "paper"){
    winner = "Computer"
} else if (userChoice === "paper" && compChoice === "rock"){
    winner = "User";
} else if (userChoice === "rock" && compChoice === "scissors"){
    winner = "User";
} else if (userChoice === "paper" && compChoice === "scissors"){
    winner = "Computer";
} else if (userChoice === "scissors" && compChoice === "paper"){
    winner = "User";
} else if (userChoice === compChoice){
    winner = "No One! It's a Tie!!!";
    }
}
// console Logs

// PLAY
userChoice = chooseMove(getRandomNum(0,3));
console.log("User Chose: " + userChoice);

compChoice = chooseMove(getRandomNum(0,3));
console.log("Computer Chose: " + compChoice);

winner = determineWinner();
console.log("The winner is... " + winner);