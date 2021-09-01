const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var temp_arrow
var engine, world;
var rand
var box1, pig1;
var gameState="PLAY"
var sword2
function preload(){
    board=loadImage("wh.png")
    applei=loadImage("apple.png")
    skulli=loadImage("skull.png")
    coinsi=loadImage("coins.png")
    swordi=loadImage("sword.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    spinner= createSprite(windowWidth/2,windowHeight/2-150);
    spinner.addImage(board);
    spinner.scale=1.2;
    sword=createSprite(windowWidth/2,windowHeight-90);
    sword.scale=0.3
    sword.addImage(swordi);
  

    
 

   
}

function draw(){
    background("cyan");
   
    Engine.update(engine);
    if (gameState==="PLAY"){
    //spinner.rotationSpeed=5
   // spinner2.rotationSpeed=5
   // spinner3.rotationSpeed=5
    target1()
    console.log(rand)
   sword.x=mouseX
    if (keyDown("space")) {
         temp_arrow = createArrow();
        temp_arrow.addImage(swordi);
         temp_arrow.x = sword.x;
         
      }
    }
        drawSprites();
    //console.log(mouseX,mouseY)
   
}
function createArrow() {
    sword2=createSprite(windowWidth/2,windowHeight-90);
    sword2.scale=0.3
    sword2.velocityY=-8
    sword2.lifetime=70
    if (sword2.x>700 || sword2.x < 450){
        sword2.x=500
}

    return sword2;
  }
function target1(){
    if(frameCount%60===0){
        obstacle=createSprite(835,240,10,10)
        obstacle.rotationSpeed=3
        obstacle.lifetime=45
        rand=Math.round(random(1,3))
        switch(rand){
            case 1 : obstacle.addImage(coinsi)
            obstacle.scale=0.1
            break;
           
            case 2 : obstacle.addImage(skulli)
            obstacle.scale=0.2
            break;
           
            case 3 : obstacle.addImage(applei)
            obstacle.scale=0.1
            break;
           
            default:break;
        }
        
    }
    
}
