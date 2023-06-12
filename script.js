let timerNumber = document.getElementById('timer-number');
let countdown = 10;

timerNumber.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 10 : countdown;

  timerNumber.textContent = countdown;
}, 1000);