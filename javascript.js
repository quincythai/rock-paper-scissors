// Computer chooses randomly between rock, paper and scissors and returns the string.
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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const playerSel = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let status;

  if (playerSel === "Rock") {
    if (computerSelection === "Paper") {
      status = "lose";
      computerScore++;
    } else if (computerSelection === "Rock") {
      status = "tie";
    } else {
      status = "win";
      playerScore++;
    }
  } else if (playerSel === "Paper") {
    if (computerSelection === "Rock") {
      status = "win";
      playerScore++;
    } else if (computerSelection === "Paper") {
      status = "tie";
    } else {
      status = "lose";
      computerScore++;
    }
  } else if (playerSel === "Scissors") {
    if (computerSelection === "Rock") {
      status = "lose";
      computerScore++;
    } else if (computerSelection === "Paper") {
      status = "win";
      playerScore++;
    } else {
      status = "tie";
    }
  }

  const resultDiv = document.querySelector('#results'); // select the div with id results
  const resultElement = document.createElement('p');

  if (status === "tie") {
    const resultText = `You tied. ${playerSel} ties ${computerSelection}.`; // string to be outputted
    resultElement.textContent = resultText; // paragraph contains the string for text
    resultDiv.appendChild(resultElement); // the paragraph becomes a child in the results div.
  } else if (status === "lose") {
    const resultText = `You ${status}! ${playerSel} loses to ${computerSelection}.`;
    resultElement.textContent = resultText; 
    resultDiv.appendChild(resultElement); 
  } else if (status === "win") {
    const resultText = `You ${status}! ${playerSel} beats ${computerSelection}.`; 
    resultElement.textContent = resultText; 
    resultDiv.appendChild(resultElement); 
  } else {
    const resultText = "You have entered an invalid reponse. No score has been altered. ";
    resultElement.textContent = resultText;
    resultDiv.appendChild(resultElement);
  }

  const scoreText = `\nPlayer score: ${playerScore}, Computer score: ${computerScore}`;
  const scoreTextNode = document.createTextNode(scoreText);
  resultElement.appendChild(scoreTextNode);

}

/* eventType - 'click, keydown, submit, mouseover...'
eventListener - function that executes when specified event (ex: click) occurs

*/
//element.addEventListener(eventType, eventListener)

function game() {
  const rockBtn = document.querySelector('#rock-btn');
  const paperBtn = document.querySelector('#paper-btn');
  const scissorsBtn = document.querySelector('#scissors-btn');
  // selects the element with id rock-btn and assigns it to rockBtn. Now, you can add eventListener to rockBtn, and modify its attributes, change styling, or perform any other actions JS allows on HTML elements.

  // doesn't work because JS evaluates function call (getComputerchoice()) immediately
  // before addEventListener even is set up
  //rockBtn.addEventListener('click', playRound("Rock", getComputerChoice()));


  rockBtn.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
  });
  paperBtn.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
  });
  scissorsBtn.addEventListener('click', () => {
   playRound("Scissors", getComputerChoice());
  });

  if (playerScore >= 5) {
  }
}

game();