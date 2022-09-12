import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const botonPP = document.querySelector(".btnPlayPause");
const botonMU = document.querySelector(".btnMuteUnmute");

const btnPP: HTMLElement = botonPP! as HTMLElement;

const btnMU: HTMLElement = botonMU! as HTMLElement;

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

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./sw.js').catch(error => {

        console.log(error);

    })
    
}
