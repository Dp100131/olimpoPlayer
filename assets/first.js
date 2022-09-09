import MediaPlayer from "/assets/MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const btnPP = document.querySelector(".btnPlayPause");
const btnMU = document.querySelector(".btnMuteUnmute");

const config = {

    el: video,
    plugins: [new AutoPlay(), new AutoPause()]

}

const player = new MediaPlayer(config);

btnPP.addEventListener('click', () => {

    player.togglePlay();
    
});

btnMU.addEventListener('click', () => {

    player.toggleMute();

});
