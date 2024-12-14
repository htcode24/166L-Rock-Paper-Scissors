const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissor"];

    // Function to start playing game:
    playerOptions.forEach(option => {
      option.addEventListener("click", function () {
          const movesLeft = document.querySelector(".movesleft");
                moves++;
               movesLeft.innerText = "Moves left: ${10 - moves}";
          const choiceNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[choiceNumber];

// function to check who wins
          winner(this.innerText, computerChoice)

// Calling gameover function after 10 moves
          if (moves == 10) {
              gameOver(playerOptions, movesLeft);
        }
      })
    })
}

// function to decide winner
const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".player-count");
    const computerScoreBoard = document.querySelector(".computer-count");
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
        result.textContent = "Tie"
      }
      else if (player == "rock") {
        if (computer == "paper") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        } else {
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
      else if (player == "scissor") {
        if (computer == "rock") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = "Player Won";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
      }
      else if (player == "paper") {
        if (computer == "scissor") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = "Player Won";
            playerScore++;
            playerScoreBoard.textContent = playScore;
        }
      }
    }

const gameOver = (playerOptions, movesLeft) => {

  const chooseMove = document.querySelector(".move");
  const result = document.querySelector(".result");
  const reloadButton = document.querySelector(".reload");

  playerOptions.forEach(option => {
    option.style.display = "none";
  })

  chooseMove.innerText = "Game Over!"
  movesLeft.style.display = "none";

  if (playerScore > computerScore) {
    result.innerText = "You Won The Game";
  }
  else if (playerScore < computerScore) {
    result.innerText = "You Lost The Game";
  }
  else {
    result.innerText = "Tie";
  }

  reloadButton.innerText = "Restart";
  reloadButton.addEventListener("click",() => {
    window.location.reload();
  })
}

// Calling playGame function inside the game
playGame();

}
// Calling the game function
game();
