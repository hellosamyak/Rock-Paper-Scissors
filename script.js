let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const gnrtCompChoice = () => { //Generating choice of the computer.
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const gameDrawn = () => {
    console.log("game was drawn.")
    msg.innerText = `Game drawn! You both chose ${userChoice}.`
    msg.style.backgroundColor = "#ffd100";
    msg.style.color = "#202020";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = `Congrats, you won! Computer chose ${compChoice}.`;
        msg.style.backgroundColor = "rgb(119,199,26)";
        msg.style.color = "white";
    } else {
        compScore++;
        compScoreCount.innerText = compScore;
        msg.innerText = `Oops, you lost! Computer chose ${compChoice}.`
        msg.style.backgroundColor = "#ff3535";
        msg.style.color = "white";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = gnrtCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        gameDrawn();
    } else {
        let userWin = true;
        if(userChoice === "rock") { //paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") { //rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { //rock or scissors
            userWin = compChoice === "rock" ? false : true;
        };
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});