'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscores = [];

const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const background = document.querySelector('body');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const changeBackgroundColor = function (color) {
  background.style.background = color;
};

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);

  if (
    (score <= 0 && (!guessInput || guessInput < 1 || guessInput > 20)) ||
    score <= 0
  ) {
    displayMessage('You lost, try again!');
    changeBackgroundColor('#ff1a1a');
    score = 0;
  } else if (!guessInput || guessInput < 1 || guessInput > 20) {
    displayMessage('Write a number between 1 and 20');
    score--;
    displayScore(score);
  } else if (guessInput > secretNumber && guessInput <= 20) {
    displayMessage('Number is too high');
    score--;
    displayScore(score);
  } else if (guessInput < secretNumber && guessInput >= 1) {
    displayMessage('Number is too low');
    score--;
    displayScore(score);
  } else if (guessInput === secretNumber) {
    displayMessage('You win!');
    changeBackgroundColor('green');
    displayNumber(guessInput);
    score--;
    displayScore(score);
  }
});

resetBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);

  if (score === 20 && !highscores.length) {
    displayScore(20);
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    changeBackgroundColor('#222');
    displayNumber('?');
    document.querySelector('.guess').value = '';

    displayHighscore(0);
  } else if (guessInput !== secretNumber || !guessInput) {
    score = 20;
    displayScore(20);
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    changeBackgroundColor('#222');
    displayNumber('?');
    document.querySelector('.guess').value = '';
  } else {
    displayScore(20);
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    changeBackgroundColor('#222');
    displayNumber('?');
    document.querySelector('.guess').value = '';

    displayHighscore(score);
    highscores.push(score);

    let highscore = highscores[0];
    for (let i = 0; i < highscores.length; i++) {
      if (highscores[i] > highscore) {
        highscore = highscores[i];
      }
    }
    displayHighscore(highscore);
  }
});
