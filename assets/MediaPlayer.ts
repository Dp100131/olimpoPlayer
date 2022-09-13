export default class MediaPlayer {
    
    media: HTMLMediaElement;
    plugins: Array<any>;
    public container: HTMLElement;

    constructor(config) {

        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayer();
        this.initPlugins();
        

    }

    private initPlayer(){

        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);

    }

    private initPlugins() {

        this.plugins.forEach(plugin => {

            plugin.run(this);

        });

    }

    play() {

        this.media.play();

    }

    pause() {

        this.media.pause();

    }
    mute() {

        this.media.muted = true;

    }

    unmute() {

        this.media.muted = false;

    }

    togglePlay() {

        if (this.media.paused) {

            this.play();

        } else {

            this.pause();

        }

    }

    toggleMute() {

        if (this.media.muted) {

            this.unmute();

        } else {

            this.mute();

        }

    }
}








