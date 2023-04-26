import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(evt) {
  localStorage.setItem(CURRENT_TIME, evt.seconds);
};


const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
  if (currentTime) {
    player.setCurrentTime(currentTime);
  };


