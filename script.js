'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔⛔ No Number...');
  }
  //winner
  else if (guess === secretNumber) {
    displayMessage('You Won!!  Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#a7c957';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = document.querySelector('.highscore').textContent = score;
    }
  }

  //High
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Loss the Game!');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#d00000';
    }
  }
  //reset
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#222';

    displayMessage('Start guessing...');
    secretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
});
