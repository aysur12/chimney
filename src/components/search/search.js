const search = document.querySelector('.search');
const searchIcon = document.querySelector('.search__icon');
const searchInput = document.querySelector('.search__input');
const searchClose = document.querySelector('.search__close');

searchIcon.addEventListener('click', () => {
  search.classList.add('search_open');
  searchInput.focus();
})

searchClose.addEventListener('click', () => {
  search.classList.remove('search_open');
})