const menuBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('burger__btn_active');
  menu.classList.toggle('burger__menu_active');
})