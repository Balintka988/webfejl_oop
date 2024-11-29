/*
*5.feladat
*/
function Player(nickname){
    this.nickname = nickname;
    this.playedMatch = 0;
}

/*
*6.feladat
*/
Player.prototype.play = function () {
    this.playedMatch++;
    console.log(this.nickname, this.playedMatch);
}
/*
*7.feladat
*/
Player.prototype.getTierLevel = function(){
    if(this.playedMatch <= 3){
        return "A";
    }
    if(this.playedMatch <= 6){
        return "B";
    }
    else{
        return "C"
    }
}
/*
*8.feladat
*/
function PrintTierLevel(nickname, tierLevel){
    console.log(nickname, tierLevel);
}
/*
*9.feladat
*/
const player = new Player("player1")
player.play();
player.play();
player.play();
PrintTierLevel(player.nickname, player.getTierLevel());