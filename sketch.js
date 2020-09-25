var fixedRect, movingRect;
var stillSquare , movingSquare;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 300, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  fixedRect.velocityX = -12;

  movingRect = createSprite(400,300,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

  stillSquare = createSprite(400,300,50,50);
  stillSquare.shapeColor = "blue";
//  stillSquare.debug = true;
 // stillSquare.velocityX = 12; 
    
  movingSquare = createSprite(200,300,30,30);
  movingSquare.shapeColor = "blue";
  movingSquare.velocityX = 12;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect , stillSquare)){
   movingRect.shapeColor = "red";
   stillSquare.shapeColor = "red";
  }
  else if(isTouching(movingRect , fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, movingSquare)){
    movingRect.shapeColor = "red";
    movingSquare.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    movingSquare.shapeColor = "blue";
    fixedRect.shapeColor = "green";
    stillSquare.shapeColor = "blue";
  }
  
  bounceOff(movingSquare , fixedRect);

  drawSprites();
}