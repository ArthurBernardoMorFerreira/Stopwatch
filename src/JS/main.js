const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const time = 1000;

const functionStart = document.querySelector('.Function_start');
const functionPause = document.querySelector('.Function_pause');
const functionReset = document.querySelector('.Function_reset');

let interval;
let isRunning = false;

hours.innerHTML = '00';
minutes.innerHTML = '00';
seconds.innerHTML = '00';

function twoDigits(value) {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
}

functionStart.addEventListener('click', () => {
  if (isRunning === false) {
    interval = setInterval(() => {
      seconds.innerHTML++;
      seconds.innerHTML = twoDigits(seconds.innerHTML);

      if (seconds.innerHTML > 59) {
        seconds.innerHTML = '00';
        minutes.innerHTML++;
        minutes.innerHTML = twoDigits(minutes.innerHTML);
      }

      if (minutes.innerHTML > 59) {
        minutes.innerHTML = '00';
        hours.innerHTML++;
        hours.innerHTML = twoDigits(hours.innerHTML);
      }
    }, time);
    isRunning = true;
  }
});

functionPause.addEventListener('click', () => {
  clearInterval(interval);

  isRunning = false;
});

functionReset.addEventListener('click', () => {
  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';

  clearInterval(interval);

  isRunning = false;
});
