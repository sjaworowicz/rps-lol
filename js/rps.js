let userChoice;
let comChoice;
let randomNum = Math.floor(Math.random() * 3);

switch(randomNum){
    case 0:
        userChoice = "rock";
        break;
    case 1:
        userChoice = "paper";
        break;
    case 2:
        userChoice = "scissors";
        break;
    default:
        userChoice: "error";
        break;
}

console.log(userChoice);
let randomNum = Math.floor(Math.random() * 3);
switch(randomNum){
    case 0:
        userChoice = "rock";
        break;
    case 1:
        userChoice = "paper";
        break;
    case 2:
        userChoice = "scissors";
        break;
    default:
        object: "error";
        break;
}

console.log("User choice" + userChoice);

console.log(comChoice);
let randomNum = Math.floor(Math.random() * 3);
switch(comChoice){
    case 0:
        comChoice = "rock";
        break;
    case 1:
        comChoice = "paper";
        break;
    case 2:
        comChoice = "scissors";
        break;
    default:
        object: "error";
        break;
}

console.log("Com Choice" + comChoice);

let winner;

if(userChoice === "rock" && compChoice === "paper"){
    winner = "Computer"
} else if (userChoice === "paper" && compChoice === "rock"){
    winner = "User";
} else if (userChoice === "rock" && compChoice === "scissors"){
    winner = "User";
} else if (userChoice === "paper" && comChoice === "scissors"){
    winner = "Computer";
} else if (userChoice === "scissors" && compChoice === "paper"){
    winner = "User";
}else if (userChoice === compChoice){
    winner = "No One! It's a Tie!!!";
}

console.log("WINNER IS: " + winner);