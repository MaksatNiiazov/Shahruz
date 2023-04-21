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

  hoursElement.innerHTML = hours < 10 ? "0" + hours : hours; // добавляем ведущий 0 для часов, если они меньше 10
  minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes; // добавляем ведущий 0 для минут, если они меньше 10
  secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds; // добавляем ведущий 0 для секунд, если они меньше 10

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

    hoursElement.innerHTML = hours < 10 ? "0" + hours : hours; // добавляем ведущий 0 для часов, если они меньше 10
    minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes; // добавляем ведущий 0 для минут, если они меньше 10
    secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds; // добавляем ведущий 0 для секунд, если они меньше 10
  }, 1000); // запускаем таймер каждую секунду
}

startTimer();


const sliderContainer = document.querySelector('.slider-container');
const sliderPrevButton = document.querySelector('.slider-prev');
const sliderNextButton = document.querySelector('.slider-next');
const slides = document.querySelectorAll('.slider-slide');
let slideIndex = 0;

function showSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

sliderPrevButton.addEventListener('click', showPrevSlide);
sliderNextButton.addEventListener('click', showNextSlide);

setInterval(() => {
  showNextSlide();
}, 3000);

showSlide(slideIndex);



var slideIndex1 = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide-vertical");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // Удаляем класс active у всех слайдов
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1-1].classList.add("active"); // Добавляем класс active для текущего слайда
  setTimeout(showSlides, 3000); // Задержка в 3 секунды между сменой слайдов
}
