const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice() 
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper" 
    }
    if (randomNumber === 3) {
        computerChoice = "scissors" 
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice){
        result = "it's a draw!"
    }
    if (computerChoice === "rock" && yourChoice === "paper") {
        result = "you won :)"
    }
    if (computerChoice === "rock" && yourChoice === "scissors") {
        result = "you lost :("
    }
    if (computerChoice === "paper" && yourChoice === "scissors") {
        result = "you won :)"
    }
    if (computerChoice === "paper" && yourChoice === "rock") {
        result = "you lost :("
    }
    if (computerChoice === "scissors" && yourChoice === "paper") {
        result = "you lost :("
    }
    if (computerChoice === "scissors" && yourChoice === "rock") {
        result = "you won :)"
    }
    resultDisplay.innerHTML = result
}
