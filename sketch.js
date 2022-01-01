const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var birdimg,lightningUpImg,lightningDownImg;
var bird,lightningUp,lightningDown;


var bg_img;
var background;
var score=0;
var storm;




function preload()
{
  bg_img = loadImage('storm.png');
  
  birdimg = loadAnimation('b1 (1).png','b1 (2).png','b1 (3).png','b1 (4).png','b1 (5).png','b1 (6).png');
  lightningUpImg = loadImage('lightning_up.png');
  lightningDownImg = loadImage('lightning_down.png')


  birdimg.playing=true
}

function setup() 
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 

 

 
  
  bird =createSprite(100,180,100,100);
  bird.addAnimation('blueBird',birdimg); 
  bird.scale=0.2
  

  

  
  
}

function draw() 
{
  background(51);

  image(bg_img,0,0,width,height);
  
  
  
  
 

  
  
  


  Engine.update(engine);
  
  fill("yellow");
  textSize(25);
  text(`Score:${score}`, width - 100, 50);
  textAlign(CENTER, CENTER);

  if (keyIsDown(UP_ARROW) ) {
    bird.positionY -= 1;
  }

  if (keyIsDown(DOWN_ARROW) ) {
    bird   .positionY += 1;
  }

 drawSprites();
   
}

