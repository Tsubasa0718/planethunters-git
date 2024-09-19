'use strict';
const audio = document.getElementById('js-audio');
let isPlaying = false; // 定数から変数に変更
audio.volume = 0.5; // Volumeを設定

const AudioPlaying = document.getElementById('js-audio-play');
const Switch = document.querySelector('.audio__switch');
const SwitchText = document.querySelector('.audio__switch--text');

AudioPlaying.addEventListener('click', () => {
 if (isPlaying) {
  audio.pause(); // タイポ修正
  Switch.classList.remove('on');
  SwitchText.innerHTML = 'SOUND OFF';
  isPlaying = false; // 状態を更新
 } else {
  audio.play();
  Switch.classList.add('on');
  SwitchText.innerHTML = 'SOUND ON';
  isPlaying = true; // 状態を更新
 }
});

// 音声ON関数
const OnPlaying = () => {
    isPlaying = true;
    audio.play();
}

// 音声OFF関数
const OffPause = () => {
    isPlaying = false;
    audio.pause();
}
