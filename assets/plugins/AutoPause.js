export default class AutoPause {

    constructor(){

        this.threshold = 0.25;

        this.handleIntersection = this.handleIntersection.bind(this);

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

    }


    run(player){

        this.player = player;

        /* console.log(this); */

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilityChange);

    }

    handleIntersection(entries){

        /* console.log("Afuera");
        console.log(this); */
    
        const entry = entries[0];
    
        if (entry.isIntersecting) {

            /* console.log("Dentro");
    
            console.log(this); */
    
            this.player.play();
            
        } else {
            
            /* console.log("Dentro");

            console.log(this); */
    
            this.player.pause();
            
        }
    
    }

    handleVisibilityChange(){

        const isVisible = document.visibilityState === "visible";

        /* console.log(document.visibilityState); */

        if (isVisible) {
            
            this.player.play();

            /* console.log(document.visibilityState); */

        } else {

            /* console.log(document.visibilityState); */

            this.player.pause();
            
        }


    }
    
    
}
