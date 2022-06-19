var trex, t1, ground, g1;

function preload(){
  t1= loadAnimation("trex1.png","trex2.png","trex3.png");
  g1=loadImage("ground2.png");

}
function setup(){
  createCanvas(600,400);
  
  trex=createSprite(70,330,10,0);
  trex.addAnimation("run",t1);
  trex.scale=0.7;

  ground=createSprite(300,350,600,10);
  ground.addImage(g1);
  ground.velocityX = -3;
  
}

function draw(){
  background("skyblue");
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  drawSprites();
}