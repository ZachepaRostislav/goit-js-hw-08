import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function savedTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(savedTime, 1000));
player.setCurrentTime(currentTime);


