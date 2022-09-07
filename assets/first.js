import MediaPlayer from './mediaPlayer';

const video = document.querySelector("video");
const btn = document.querySelector("button");

const player = new MediaPlayer({el: video});

btn.addEventListener('click', () => {

    player.togglePlay();
    

});