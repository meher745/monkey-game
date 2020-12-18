
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime=0,score=0  ;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(70,350,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,382,900,10);
  ground.shapeColor="SaddleBrown";
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("wheat");
  
  stroke("black");
  fill("black");
  textSize(15);
  text("Score:"+score,250,50);
  
  stroke("black");
  fill("black");
  textSize(15);
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivaltime,10,50);
  
  //jump
  if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
    }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount%80===0){
     banana=createSprite(300,200,10,10);
     banana.addImage("banana",bananaImage);
     banana.scale=0.1;
     banana.y=Math.round(random(120,230));
     banana.velocityX=-5;
     banana.lifetime=300;
     FoodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(350,360,10,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime = 300;
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    
  }
}



