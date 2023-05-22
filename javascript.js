function getComputerChoice() {
  const num = Math.floor((Math.random() * 3) + 1);

  let computerChoice;

  switch (num) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  const playerSel = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let status;

  if (playerSel === "Rock") {
    if (computerSelection === "Paper") {
      status = "lose";
    } else if (computerSelection === "Rock") {
      status = "tie";
    } else {
      status = "win";
    }
  } else if (playerSel === "Paper") {
    if (computerSelection === "Rock") {
      status = "win";
    } else if (computerSelection === "Paper") {
      status = "tie";
    } else {
      status = "lose";
    }
  } else if (playerSel === "Scissors") { // playerSel === "Scissors"
    if (computerSelection === "Rock") {
      status = "lose";
    } else if (computerSelection === "Paper") {
      status = "win";
    } else {
      status = "tie";
    }
  } else {
    status = "invalid"
  }

  if (status === "tie") {
    console.log(`You tied. ${playerSel} ties ${computerSelection}.`);
  } else if (status === "lose") {
    console.log(`You ${status}! ${playerSel} loses to ${computerSelection}.`);
  } else if (status === "win") {
    console.log(`You ${status}! ${playerSel} beats ${computerSelection}.`);
  } else {
    console.log("You entered in an invalid response. It will not count.");
  }

  return status;
}


// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0, computerScore = 0;
  let winner;
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Make a choice: ", "exit");
    if (userChoice === "exit")
      break;
    else {
      let status = playRound(userChoice, getComputerChoice());
      if (status === "win") {
        playerScore++;
        winner = "player";
      } else if (status === "lose") {
        computerScore++;
        winner = "computer";
      } else {
        winner = "tie";
      }

      if (winner !== "tie") {
        console.log(`The winner of this round is: ${winner}`)
      } else {
        console.log("This round was a tie!");
      }
      console.log('\n');
    }
  }
  if (playerScore > computerScore) {
    console.log(`The final winner is: player!`)
  } else if (computerScore > playerScore) {
    console.log("The final winner is computer!");
  } else {
    console.log("Exiting...");
  }
}

game();