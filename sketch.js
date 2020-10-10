
var wall;

var thickness, bullet;
var speed, weight; 
var bullet1,bullet2;

function setup() {
  createCanvas(1600, 400);


	speed=random(223,500);
  weight=random(30,50);
  thickness = random (60,90);


	bullet=createSprite(50, 200, 50,10);   
  bullet.shapeColor="white";
	bullet.velocityX = speed;

	


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=(80,80,80);
}

function draw() {
  background("black");
if (hasCollided(bullet,wall)){
  
  bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage<10){
  wall.shapeColor="green";
  
}
if(damage>10){
  wall.shapeColor="red"
  
}
 
 }
  drawSprites();
 
}
  function hasCollided(bullet1,bullet2){

   bulletRightEdge= bullet1.x+bullet1.width;
    wallLeftEdge = bullet2.x;
   if(bulletRightEdge>=wallLeftEdge){
    return true;
   }
   
   return false;
  }
