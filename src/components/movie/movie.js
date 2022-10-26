function toggleVideo({ currentTarget: wrapper }) {
  let video = wrapper.querySelector('.movie__video');
  let playpause = wrapper.querySelector('.movie__play-pause');
  if (video.paused) {
    video.play();
    playpause.setAttribute('hidden', '');
  } else {
    video.pause();
    playpause.removeAttribute('hidden');
  }
}

document.querySelectorAll('.movie__video-block')
  .forEach(wrapper => wrapper.addEventListener('click', toggleVideo));