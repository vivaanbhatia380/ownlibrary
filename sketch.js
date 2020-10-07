var fixedrect ,movingrect,object1,object2;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 50);
 movingrect= createSprite(200, 200, 50, 50);
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";
 object1= createSprite(100, 100, 50, 50);
 object2= createSprite(200, 100, 50, 50);
 object1.shapeColor="green";
 object2.shapeColor="green";

 object2.velocityY=3;
 fixedrect.velocityY=-3;
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTouching(movingrect,object1)){
    object1.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  else{
   object1.shapeColor="green";
    movingrect.shapeColor="green";
  }
  bounceoff(object2,fixedrect);
  drawSprites();

}
