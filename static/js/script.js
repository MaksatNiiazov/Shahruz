const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
  navContainer.classList.toggle('nav-open');
});

