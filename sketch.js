const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
function preload(){
    board=loadImage("sword.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
spinner= createSprite(windowWidth/2,windowHeight/2);
    spinner.addImage(board)
    
 

   
}

function draw(){
    background("white");
   
    Engine.update(engine);
    drawSprites();
}