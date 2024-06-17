function randomNumber()
{
    const options =[ "Rock","Scissors","Paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function hasPlayerWon(player,computer)
{
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
      );
}
let playerScore=0;
let computerScore=0;

function calResult(userOption)
{
    const computerChoice = randomNumber();
    let resultMessage = "";
    
    if (hasPlayerWon(userOption, computerChoice)) {
        playerScore++;
        resultMessage = `Player Won! ${userOption} beats ${computerChoice}`;
    } else if (userOption === computerChoice) {
        resultMessage = `It's a Tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        resultMessage = `Computer Won! ${computerChoice} beats ${userOption}`;
    }
    
    return resultMessage;
}
const playerscore_ele = document.getElementById("playerscore");
const computerscore_ele = document.getElementById("computerscore");
const resetbtn = document.getElementById("reset-btn");
const resultmsg = document.getElementById("res-msg");
const winner = document.getElementById("win-msg");
const resultcontainer = document.querySelector(".btn-container")

function showResult(userOption)
{
    resultmsg.innerText = calResult(userOption);
    playerscore_ele.innerText = playerScore;
    computerscore_ele.innerText = computerScore;
    if(playerScore === 3 || computerScore === 3)
        {
            if(playerScore === 3)
                {
                    winner.innerText = "Player Won The Game";
                }
                else{
                    winner.innerText = "Computer Won The Game";
            
                }
                 resetbtn.style.display = "block";
        resultcontainer.style.display ="none"
        }
       
        
}
function resetButton()
{
    playerScore = 0;
    computerScore =0;
    playerscore_ele.innerText = playerScore;
    computerscore_ele.innerText = computerScore;
    resetbtn.style.display = "none";
        resultcontainer.style.display ="block"
        resultmsg.innerText = "";
        winner.innerText ="";

}
resetbtn.addEventListener("click",resetButton)

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    showResult("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResult("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResult("Scissors");
  });
