var fixedRect,movingRect,rect1,rect2

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(600,200,50,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  rect1=createSprite(200,400,50,50);
  rect1.shapeColor="blue";
  rect1.velocityX=3;
  rect1.debug=true;

  rect2=createSprite(800,400,50,50);
  rect2.shapeColor="blue";
  rect2.velocityX=-3;
  rect2.debug=true;

}

function draw() {
  background(255,255,255);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&  
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 &&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

else {
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 &&  
rect2.x-rect1.x<rect1.width/2+rect2.width/2) {
    rect2.velocityX=rect2.velocityX*(-1);
    rect1.velocityX=rect1.velocityX*(-1);
} 
if(rect1.y-rect2.y<rect1.height/2+rect2.height/2 &&
  rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.velocityY=rect1.velocityY*(-1);
    rect2.velocityY=rect2.velocityY*(-1);
  }
  drawSprites();
}