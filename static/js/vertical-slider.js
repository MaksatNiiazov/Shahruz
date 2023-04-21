const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let currentSlide = 0;
let interval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

slider.addEventListener('mouseover', () => {
  clearInterval(interval);
});

slider.addEventListener('mouseleave', () => {
  interval = setInterval(nextSlide, 5000);
});
