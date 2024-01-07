console.log("THIS IS A NO. GUESSING GAME");

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function() {
  let guess = document.getElementById("guessedNo").value;
  guesses += 1;
  guess = parseInt(guess);

  if (isNaN(guess)) {
    alert("Invalid input. Please enter a number.");
  } else {
    if (guess === answer) {
      alert(`${answer} is the number. It took you ${guesses} guesses.`);
    } else if (guess < answer) {
      alert("Too small.");
    } else if (guess > answer) {
      alert("Too big.");
    }
  }
};
