let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber >= 33 && randomNumber < 66) return "rock"
    else if (randomNumber < 33) return "paper"
    else return "scissor"       
};

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector(".paper");
const scissorbtn = document.querySelector(".scissor");
const div = document.querySelector("buttons");
let cpScore = document.querySelector(".cpScore");
let huScore = document.querySelector(".huScore");
let readResult = document.querySelector(".readResult");
readResult.value = ""
let humanScore = 0;
let computerScore = 0;
huScore.value = humanScore
cpScore.value = computerScore
let getHumanChoice = "";
let humanSelection = getHumanChoice;

let computerSelection = getComputerChoice();

let playGame = function() {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = function(humanChoice,computerChoice) {
        if (humanChoice == computerChoice) {humanScore = 1; computerScore = 1; readResult= `You chose ${humanChoice}, Computer chose ${computerChoice}`;}
        if (humanChoice=="paper"&&computerChoice=="rock") { readResult= "You Win! Paper beats Rock"; humanScore++}
        else if (humanChoice=="rock"&&computerChoice=="scissor") { readResult = "You Win! Rock beats Scissor";humanScore++}
        else if (humanChoice=="scissor"&&computerChoice=="paper") { readResult = "You Win! Scissor beats Paper"; humanScore++}
        else if (humanChoice=="paper"&&computerChoice=="scissor") { readResult = "You Lose! Scissor beats Paper";computerScore++}
        else if (humanChoice=="rock"&&computerChoice=="paper")  {readResult = "You Lose! Paper beats Rock";computerScore++}
        else if (humanChoice=="scissor"&&computerChoice=="rock")  {readResult = "You Lose! Rock beats Scissor";computerScore++}    
    };
    playRound(humanSelection,computerSelection);
    
    
    
}

let playRound = function(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {humanScore = 1; computerScore = 1; readResult= `You chose ${humanChoice}, Computer chose ${computerChoice}`;}
    if (humanChoice=="paper"&&computerChoice=="rock") { readResult= "You Win! Paper beats Rock"; humanScore++}
    else if (humanChoice=="rock"&&computerChoice=="scissor") { readResult = "You Win! Rock beats Scissor";humanScore++}
    else if (humanChoice=="scissor"&&computerChoice=="paper") { readResult = "You Win! Scissor beats Paper"; humanScore++}
    else if (humanChoice=="paper"&&computerChoice=="scissor") { readResult = "You Lose! Scissor beats Paper";computerScore++}
    else if (humanChoice=="rock"&&computerChoice=="paper")  {readResult = "You Lose! Paper beats Rock";computerScore++}
    else if (humanChoice=="scissor"&&computerChoice=="rock")  {readResult = "You Lose! Rock beats Scissor";computerScore++}    
};

rockbtn.addEventListener("click", function() { let humanSelection = "rock"; playRound(humanSelection,computerSelection)})
paperbtn.addEventListener("click",()=> humanSelection= "paper" )
scissorbtn.addEventListener("click",()=> humanSelection = "scissor")

console.log(computerSelection)
console.log(humanSelection)
rockbtn.addEventListener("click",playGame())
console.log(humanSelection)
console.log(getHumanChoice)
playRound("rock",computerSelection)

