class Form{
    constructor(){

        this.input=createInput("Enter your Name");
        this.button=createButton("click to start");
        this.greeting=createElement("h3")
        this.title=createElement("h1");
 }
hide(){

this.input.hide()
this.button.hide()
this.greeting.hide()
this.title.hide()

}

display(){

this.title.html("Multiplayer Car Racing")
this.title.position(displayWidth/2-50,0);

this.input.position(displayWidth/2-40,displayHeight/2-80);


this.button.position(displayWidth/2+30,displayHeight/2);


this.button.mousePressed(()=>{
this.input.hide();
this.button.hide(); 

player.name=this.input.value();
playerCount=playerCount+1;
player.index=playerCount
player.update();
player.updateCount(playerCount);
this.greeting.position(displayWidth/2-70,displayHeight/4)
this.greeting.html("hellow"+player.name);
})




}
}