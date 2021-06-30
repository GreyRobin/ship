var sea,seaimg
var ship,shipimg
function preload(){
  seaimg = loadImage("sea.png")
  shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,80,80)
  sea.addImage("sea",seaimg)
  ship = createSprite(150,150,40,40)
  ship.addAnimation("ship",shipimg)
  ship.scale = 0.25
  sea.scale = 0.25
}

function draw() {
  background("blue");
  ship.velocityY = -2
  if(ship.y<184){
    ship.y=ship.y+2
  }
  if(sea.x<0){
    sea.x=sea.width/8
  }
  drawSprites();
}