const heartButton = document.querySelector('.heart');
const heartIcon = document.querySelector('.heart__icon');

heartButton.addEventListener('click', () => {
  heartButton.classList.toggle('heart_color');
})