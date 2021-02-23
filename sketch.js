var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor='green';
  
  movingRect=createSprite(600,400,80,50);
  movingRect.shapeColor='green';

  gameObject1=createSprite(200,600,50,80);
  gameObject1.shapeColor="yellow";
  gameObject1.velocityX=1;

  gameObject2=createSprite(500,400,50,80);
  gameObject2.shapeColor="yellow";

  gameObject3=createSprite(800,600,50,80);
  gameObject3.shapeColor="yellow";
  gameObject3.velocityX=-1;

}

function draw() {
  background(0);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

 if( isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor='red';
    movingRect.shapeColor='red';
  }
  else {
    fixedRect.shapeColor='green';
    movingRect.shapeColor='green';
 }

 if( isTouching(gameObject2,movingRect)){
  gameObject2.shapeColor='red';
  movingRect.shapeColor='red';
}
else {
  gameObject2.shapeColor='yellow';
  movingRect.shapeColor='green';
}

bounceOff(gameObject1,gameObject3);

  drawSprites();
}

