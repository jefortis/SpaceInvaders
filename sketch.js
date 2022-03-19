var enemigoRojo;


function preload(){
  
  enemigoRojoImg=loadImage("enemigo_rojo.png");
  
}

function setup() {
  createCanvas(600, 700);
  
  enemigoRojo= createSprite(50,180,20,50);
  enemigoRojo.addImage(enemigoRojoImg);
  enemigoRojo.scale=1.5;
 
  
}

function draw() {
  background(180);

 
  drawSprites();
}

