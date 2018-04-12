const navBtn = document.querySelector('.navigation__btn');
const navBtnSvg = document.querySelector('.navigation__btn-svg');
const nav = document.querySelector('.navigation__list-container');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  navBtnSvg.classList.toggle('open');
});
