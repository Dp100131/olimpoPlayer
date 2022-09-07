export default function AutoPlay(){}

AutoPlay.prototype.run = function(player){
    
    console.log(player);
    player.mute();
    player.play();

}