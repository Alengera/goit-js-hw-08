// import Player from '@vimeo/player'
// const iframe = document.querySelector('iframe');
//     const player = new Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new VimeoPlayer("vimeo-player");

const saveCurrentTime = (time) => {
  localStorage.setItem("videoplayer-current-time", time);
};

const loadCurrentTime = () => {
  return localStorage.getItem("videoplayer-current-time");
};

const playVideoFromSavedTime = () => {
  const currentTime = loadCurrentTime();
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
};

player.on("timeupdate", throttle((event) => {
  const currentTime = event.seconds;
  saveCurrentTime(currentTime);
}, 1000));

window.addEventListener("DOMContentLoaded", playVideoFromSavedTime);