const guessedLetters = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector("remaining");
const spanRemaining = document.querySelector(".remaining span");
const message = document.querySelector(".mesage");
const playAgain = document.querySelector("play-again");

const word = "magnolia";

const updateDot = function (word) {

    const alphabet = [];
    for (const letter of word) {
        console.log(letter);
        alphabet.push("●");
    }

    wordInProgress.innerText = alphabet.join("");
};
updateDot(word);

guess.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letter.value;
    console.log(guess);
    letter.value = "";
  });