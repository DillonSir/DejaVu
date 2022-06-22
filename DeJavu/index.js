let answer = Math.floor(Math.random() * 100) + 1;
let userGuess;

do {
  turn();
} while (answer != userGuess);

function turn() {
  userGuess = prompt("Guess a whole number between 1 and 100:");
  userGuess = parseInt(userGuess);
  if (isValid(userGuess)) {
    if (answer < userGuess) {
      alert("Your guess is too high");
    } else if (answer > userGuess) {
      alert("Your guess is too low");
    } else {
      alert("You guessed correctly");
    }
  } else {
    alert("You didn't give me a valid guess..");
  }
}

function isValid(input) {
    return typeof input == "number" && !isNaN(input);
}
