const video = document.querySelector("video");
const btn = document.querySelector("button");

function MediaPlayer(config) {

    this.media = config.el;

}

MediaPlayer.prototype.play = function() {

    this.media.play();

}

MediaPlayer.prototype.pause = function() {

    this.media.pause();

}

const player = new MediaPlayer({el: video});

let statusVideo = "pause";

btn.addEventListener('click', () => {

    if (statusVideo == "pause") {

        player.play();

        statusVideo = "play";
        
    } else {

        player.pause();

        statusVideo = "pause";
        
    }
    

});