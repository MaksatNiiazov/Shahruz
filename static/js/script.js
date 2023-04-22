const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
  navContainer.classList.toggle('nav-open');
});

// Задаем дату и время окончания таймера
var countDownDate = new Date("April 30, 2030 23:59:59").getTime();

// Обновляем таймер каждую секунду
var x = setInterval(function() {

  // Получаем текущую дату и время
  var now = new Date().getTime();

  // Вычисляем разницу между текущим временем и временем окончания
  var distance = countDownDate - now;

  // Вычисляем количество часов, минут и секунд
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

  // Отображаем количество часов, минут и секунд в соответствующих элементах
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Если таймер достиг нуля, останавливаем его и выводим сообщение
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Время истекло";
  }
}, 1000);


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
}, 5000);

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
