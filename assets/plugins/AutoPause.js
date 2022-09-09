export default class AutoPause {

    constructor(){

        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);

    }


    run(player){

        this.player = player;

        /* console.log(this); */

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

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
    
    
}
