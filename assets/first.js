import MediaPlayer from "/assets/MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector("video");
const btn = document.querySelector("button");

const config = {

    el: video,
    plugins: [new AutoPlay()]

}

const player = new MediaPlayer(config);

btn.addEventListener('click', () => {

    player.togglePlay();
    

});
