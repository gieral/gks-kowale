const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav-list--active');
}

hamburger.addEventListener('click', handleClick);