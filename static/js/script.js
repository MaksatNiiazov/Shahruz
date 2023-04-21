const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
  navContainer.classList.toggle('nav-open');
});


var hours = 12; // устанавливаем количество часов для таймера
var minutes = 0; // устанавливаем количество минут для таймера
var seconds = 0; // устанавливаем количество секунд для таймера

function startTimer() {
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");

  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  var timer = setInterval(function() {
    seconds--; // уменьшаем количество секунд на 1

    if (seconds < 0) {
      seconds = 59;
      minutes--; // уменьшаем количество минут на 1
    }

    if (minutes < 0) {
      minutes = 59;
      hours--; // уменьшаем количество часов на 1
    }

    if (hours < 0) {
      clearInterval(timer); // останавливаем таймер, когда время истекло
      hours = 12; // устанавливаем количество часов заново
      minutes = 0; // устанавливаем количество минут заново
      seconds = 0; // устанавливаем количество секунд заново
      startTimer(); // запускаем таймер заново
    }

    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
  }, 1000); // запускаем таймер каждую секунду
}

startTimer();