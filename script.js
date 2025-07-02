let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //To generate random no or idx 0-2
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Draw, Play again!";
    msg.style.backgroundColor = "#6369D1";
};
  
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win!!! Your ${userChoice} beats Comp's ${compChoice}`;
      msg.style.backgroundColor = "#FF37A6";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lose. Comp's ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "#79C99E";
    }
};

const playGame = (userChoice) => {
    //Generate Comp Choice
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
          //Comp choice = scissors, paper
          userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
          //Comp choice = rock, scissors
          userWin = compChoice === "rock" ? true : false;
        } else {
          //Comp choice = paper, rock
          userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});