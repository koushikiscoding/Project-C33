var bg;
var person,personImg;
var snow = [];

function preload(){
  bg = loadImage("snow2.jpg");
  personImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  person = createSprite(400, 200, 50, 50);
  person.addImage(personImg);
  person.scale = 0.8;
  person.visible = false;
}

function draw() {
  background(bg);  
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    person.visible = true;
  }
}