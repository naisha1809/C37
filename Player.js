class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
            playerCountRef.on("value",function(data){
                playerCount = data.val();
            });
            

    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
      });
    }

    static getPlayerInfo(){
        var playerInfoRef =  database.ref("players");
        playerInfoRef.on("value",function(data){
            allPlayers=data.val();
        });
    }
}