class Player {
  constructor(){

    this.name = null;
    this.distance = 0;
    this.index = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
  }

  static getPlayerInfo(){

    var pir = database.ref('players');
    pir.on("value",(data)=>{

      allplayers = data.val();

    })

  }

}
