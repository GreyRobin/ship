var seaimg
var shipimg
function preload(){
  seaimg = loadImage("sea.png")
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seaimg = createSprite(200,200,80,80)
  seaimg.addImage("sea",seaimg)
  shipimg = createSprite(150,150,40,40)
  shipimg.addAnimation("ship",shipimg)
}

function draw() {
  background("blue");
  shipimg.velocityY = -2
  if(shipimg.y<0){
    shipimg.y=shipimg.y+2
  drawSprites();
}