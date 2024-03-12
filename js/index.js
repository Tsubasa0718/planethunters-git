'use starict';
const Loading = document.getElementById('js-lording');
setTimeout(()=>{
  if(Loading){
    Loading.style.transition = 'opacity 3000ms';
    Loading.style.opacity = 0
    Loading.addEventListener('transitionend', ()=>{
        Loading.style.display = 'none'
    }, {once: true});
  }
}, 8000)
// lordinganimation

window.addEventListener('load', setMvElementsHeight);
window.addEventListener('resize', setMvElementsHeight);

function setMvElementsHeight() {
  const windowHeight = window.innerHeight;
  document.querySelectorAll('.p-mv').forEach(mv => {
    mv.style.height = windowHeight + 'px';
  });
};
const fadeOutElement = (element) => {
  element.style.transition = 'opacity 2000ms';
  element.style.opacity = 0;

  const onFadeOutEnd = () => {
    element.style.display = 'none';
    element.removeEventListener('transitionend', onFadeOutEnd);
  };

  element.addEventListener('transitionend', onFadeOutEnd);
};

setTimeout(() => {
if (Loading) {
    fadeOutElement(Loading);
  }
}, 1000);

window.addEventListener('resize', () => {
  const windowHeight = window.innerHeight;
  document.querySelectorAll('.mv').forEach((mv) => {
    mv.style.height = `${windowHeight}px`;
  });
});
// mv

let audio = document.getElementById("js-audio");
let isPlaying = false;
audio.volume = 0.5;

const audioSwitchElements = document.querySelectorAll(".p-audio__swich");
const audioSwitchText = document.querySelector(".p-audio__swich-text");

const togglePlay = () => {
  isPlaying = !isPlaying;
  audioSwitchText.textContent = isPlaying ? "SOUND ON" : "SOUND OFF";
  audioSwitchElements.forEach(elem => elem.classList.toggle("on", isPlaying));
  if (isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
};

document.getElementById("js-audio-play").addEventListener("click", togglePlay);

audio.addEventListener("playing", () => {
  isPlaying = true;
});

audio.addEventListener("pause", () => {
  isPlaying = false;
});
//audio

document.addEventListener('DOMContentLoaded', () => {
  const spCTA = document.querySelector('.p-Spcta');

  const checkScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 1000 && currentScroll <= 2500) {
      spCTA.classList.add('is-opacity');
    } else {
      spCTA.classList.remove('is-opacity');
    }
  };

  window.addEventListener('scroll', checkScroll);
});
// spcta
