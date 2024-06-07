let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber >= 33 && randomNumber < 66) return "rock"
    else if (randomNumber < 33) return "paper"
    else return "scissor"       
};

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector(".paper");
const scissorbtn = document.querySelector(".scissor");

let cpScore1 = document.querySelector(".cpScore");
let huScore1 = document.querySelector(".huScore");

let cpScore = 0;
let huScore = 0;


let readResult = document.querySelector(".readResult");

let result = document.querySelector(".result");

let finalResult = document.querySelector(".finalResult");
const div = document.querySelector(".newGame");
const newGame = document.createElement("button");
newGame.classList.add("theNewGameButton")
newGame.textContent= "Start a new Game"


let computerSelection = getComputerChoice()

/* const solution = document.querySelector(".solution");
let bau = document.querySelector(".second");
const dog = document.querySelector(".miao");

const checkbox = document.querySelector("input[id=toggleswitch]");
checkbox.addEventListener("change",function(){
    if (this.checked) {solution.style.cssText = "border:1px solid;border-color:gray;width: 210px;height:50px;border-radius: 5px";bau.textContent=`Computer chose ${computerSelection}`}
    else {dog.removeChild(solution)}
})
*/

console.log("computer chose " + computerSelection)

rockbtn.addEventListener("click", function() {
    humanSelection = "rock";
    if (computerSelection == "rock") {result.textContent = "Computer chose rock";readResult.textContent = "Tie!";cpScore++;huScore++; cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else if (computerSelection =="paper") {result.textContent = "Computer chose paper";readResult.textContent = "You Lose!";cpScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else  {result.textContent = "Computer chose scissor";readResult.textContent="You Win!";huScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    getComputerChoice()
    computerSelection = getComputerChoice()
    console.log("computer chose " + computerSelection)
    if (cpScore<5&&huScore<5) return
    else if (cpScore==5&&huScore<cpScore) {finalResult.textContent = "Computer wins the game!"; rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore<huScore) {finalResult.textContent = "Human wins the game!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore==huScore) {finalResult.textContent = "The game is a tie!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
})

paperbtn.addEventListener("click", function() {
    humanSelection = "paper";
    if (computerSelection == "paper") {result.textContent = "Computer chose paper";readResult.textContent = "Tie!";cpScore++;huScore++; cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else if (computerSelection =="scissor") {result.textContent = "Computer chose scissor";readResult.textContent = "You Lose!";cpScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else  {result.textContent = "Computer chose rock";readResult.textContent="You Win!";huScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    getComputerChoice()
    computerSelection = getComputerChoice()
    console.log("computer chose " + computerSelection)
    if (cpScore<5&&huScore<5) return
    else if (cpScore==5&&huScore<cpScore) {finalResult.textContent = "Computer wins the game!"; rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore<huScore) {finalResult.textContent = "Human wins the game!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore==huScore) {finalResult.textContent = "The game is a tie!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
})

scissorbtn.addEventListener("click", function() {
    humanSelection = "scissor";
    if (computerSelection == "scissor") {result.textContent = "Computer chose scissor";readResult.textContent = "Tie!";cpScore++;huScore++; cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else if (computerSelection =="rock") {result.textContent = "Computer chose rock";readResult.textContent = "You Lose!";cpScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    else  {result.textContent = "Computer chose paper";readResult.textContent="You Win!";huScore++;cpScore1.textContent = cpScore;huScore1.textContent = huScore}
    getComputerChoice()
    computerSelection = getComputerChoice()
    console.log("computer chose " + computerSelection)
    if (cpScore<5&&huScore<5) return
    else if (cpScore==5&&huScore<cpScore) {finalResult.textContent = "Computer wins the game!"; rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore<huScore) {finalResult.textContent = "Human wins the game!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
    else if (huScore==5&&cpScore==huScore) {finalResult.textContent = "The game is a tie!";rockbtn.disabled=true;paperbtn.disabled=true,scissorbtn.disabled=true;div.appendChild(newGame)}
})

newGame.addEventListener("click",()=>{
    cpScore=0
    huScore=0
    cpScore1.textContent = cpScore
    huScore1.textContent = huScore
    finalResult.textContent =""
    readResult.textContent = ""
    result.textContent = ""
    rockbtn.disabled=false
    paperbtn.disabled=false
    scissorbtn.disabled=false
    div.removeChild(newGame)
})