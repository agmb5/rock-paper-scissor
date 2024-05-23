let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber >= 33 && randomNumber < 66) return "rock"
    else if (randomNumber < 33) return "paper"
    else return "scissor"       
};

let ask = prompt("Please type either rock, paper or scissor", );


let getHumanChoice = function() {
    let refinedHumanChoice = ask.toLowerCase()
    if (refinedHumanChoice == "paper"|| refinedHumanChoice == "rock"||refinedHumanChoice == "scissor") return(refinedHumanChoice);
    else console.log(alert("not within given choices!"))

};


let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice()






let playGame = function() {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = function(humanChoice,computerChoice) {
        if (humanChoice == computerChoice) {console.log("Tie!")}
        if (humanChoice=="paper"&&computerChoice=="rock") { console.log("You Win! Paper beats Rock"); humanScore++}
        else if (humanChoice=="rock"&&computerChoice=="scissor") { console.log("You Win! Rock beats Scissor");humanScore++}
        else if (humanChoice=="scissor"&&computerChoice=="paper") { console.log("You Win! Scissor beats Paper"); humanScore++}
        else if (humanChoice=="paper"&&computerChoice=="scissor") { console.log("You Lose! Scissor beats Paper");computerScore++}
        else if (humanChoice=="rock"&&computerChoice=="paper")  {console.log("You Lose! Paper beats Rock");computerScore++}
        else if (humanChoice=="scissor"&&computerChoice=="rock")  {console.log("You Lose! Rock beats Scissor");computerScore++}    
    };
    playRound(humanSelection,computerSelection);
    ask = prompt("Please type either rock, paper or scissor", );
    getHumanChoice();
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection,computerSelection);
    ask = prompt("Please type either rock, paper or scissor", );
    getHumanChoice();
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection,computerSelection);
    ask = prompt("Please type either rock, paper or scissor", );
    getHumanChoice();
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection,computerSelection);
    ask = prompt("Please type either rock, paper or scissor", );
    getHumanChoice();
    getComputerChoice();
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice()
    playRound(humanSelection,computerSelection);
    console.log("Human Score:"+humanScore)
    console.log("Computer Score:"+computerScore)
    if (humanScore>computerScore) console.log("Human Wins!")
    else if (humanScore==computerScore) console.log("It is a Tie!")
    else console.log("Computer Wins!")
}

playGame()

