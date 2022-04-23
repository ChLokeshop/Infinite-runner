var tower,towerImg
var door
var doorImage
function preload() {
    towerImg = loadImage("tower.png")
    doorImg = loadImage("door.png")
}
function setup() {
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1

  
}
function draw() {
  background(0);
if(tower.y>400){
  tower.y = 300;
}
spwanDoors();
  drawSprites();
}
function spwanDoors() {
  if(frameCount%240===0){
    door = createSprite(200,-50);
 door.addImage(doorImg)
 door.x = Math.round(random(120,400))
 door.velocityY = 1;
 console.log(door.y);
  }
}