'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === number) {
    document.querySelector('.message').textContent = ' Ai ghicit numarul!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? ' Numarul este prea mare!' : 'Numarul este mai mic!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Ai pierdut jocu!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent =
    'Incearca sa ghicesti numarul...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
