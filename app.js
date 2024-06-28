// Array of game choices
let choice = ["rock", "paper", "scissors"];

// Plays a single round of game
function playRound(playerPick, computerPick) {
  // const choice = prompt("Make a pick...");
  if (playerPick === computerPick) {
    return "The game is a tie";
  } else if (
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "paper" && computerPick === "rock") ||
    (playerPick === "scissors" && computerPick === "paper")
  ) {
    return `You win ${playerPick} beats ${computerPick}`;
  } else {
    return `You lose ${computerPick} beats ${playerPick}`;
  }
}

// Runs loop to play game 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    let computerPick = choice[randomNumber()];
    let playerPick = choice[randomNumber()];
    console.log(playRound(playerPick, computerPick));
  }
}

console.log(game());

// Function to random number
function randomNumber() {
  return Math.floor(Math.random() * choice.length);
}

// Make round of 5 keep store and report winner or loser
