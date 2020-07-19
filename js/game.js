class Game{
    constructor(){}
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){

            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({

            gameState:state

        })
        
    }   
    start(){
        
        if(gameState===0){

            player=new Player();
            player.getCount();

            form=new Form();
            form.display();
        }
        car1=createSprite(100,200,20,20);
        car2=createSprite(300,200,20,20);
        car3=createSprite(500,200,20,20);
        car4=createSprite(700,200,20,20);
        cars=[car1,car2,car3,car4]

    }
    play(){

        form.hide()
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
        var index=0
        var x=0;
        var y=0; 
        
        for(var plr in allPlayers){
            index=index+1
            x=x+200;
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){

                cars[index-1].shapeColor= "red";
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y

            

            }
            else{

                cars[index-1].shapeColor="black"

            }


        
        
        }
        }
        if(keyDown(UP_ARROW)&& player.index !==null){
            player.distance=player.distance+50
            player.update();
        }
       drawSprites(); 
    }
}
