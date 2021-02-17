class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){

        playerCount = playerCountRef.val();
        player.getCount();
        
      }
      form = new Form()
      form.display();
    }
  }

  play(){

    form.hide();
    textSize (30);
    text("gameStart",120,100);
    Player.getPlayerInfo();
    if(allplayers !== undefined){

      var display_position = 130;
      for(var p in allplayers){

        if(p === "player" + player.index){

          fill("red");

        }

        else{

          fill("black");

        }
      
        textSize(15);

      display_position += 20
      text(allplayers[p].name + ":" + allplayers[p].distance,120,display_position);
      }

    }
    if(keyIsDown (UP_ARROW) && player.index !== null){

      player.distance += 50;
      player.update();

    }

  }

}
