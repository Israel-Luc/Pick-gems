var PLAY =1;
var END = 0;
var gameState = PLAY;

var score;
var life = 5;

var rocket, rocketIMG;
var monster1, monster2, monsterIMG, monster2IMG, monstersGroup;
var sat, satIMG;
var rubi, rubi2, rubi3, rubiIMG, rubi2IMG, rubi3IMG;
var fundo, fundoIMG;

function preload(){
  rocketIMG = loadImage("rocket.png");
  rubiIMG = loadImage("rubi.png");
  rubi2IMG = loadImage("rubi2.png");
  rubi3IMG = loadImage("rubi3.png");
  fundoIMG = loadAnimation("background.PNG");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  fundo = createSprite(675, 1550);
  fundo.addAnimation("background", fundoIMG);
  fundo.velocityY = 2;

  rocket = createSprite(300,windowHeight, 25,25);
  rocket.addImage("rocket", rocketIMG);
  rocket.scale = 0.25;

  score = 0;

  rubiGroup = new Group();
  rubi2Group = new Group();
  rubi3Group = new Group();
}

function draw() {
  background(0);
  if(fundo.y > 400){
    fundo.y = 300
  } 

  rocket.velocityY = -0.5;

  rocket.x = World.mouseX;
  rocket.y = World.mouseY;

if(rubiGroup.isTouching(rocket)){
  life = life-1;
  //rocket.destroy();
  rubi.destroy();
  //rubi2Group.destroyEach();
  //rubi3Group.destroyEach();
 }
 if(rubi2Group.isTouching(rocket)){
  score = score+1;
  //rubiGroup.destroyEach();
  rubi2.destroy();
  //rubi3Group.destroyEach();
 }
 if(rubi3Group.isTouching(rocket)){
  score = score+1;
  //rubiGroup.destroyEach();
  //rubi2Group.destroyEach();
  rubi3.destroy();
 }

  drawSprites();

  fill ("blue");
  textSize (20);
  text ("score:" +score, 1200,30);

  rubiG();
  rubi2G();
  rubi3G();

  fill ("red");
  textSize (20);
  text ("life:" +life, 1200,50);
}

function rubiG(){ if(frameCount %60 === 0){
  rubi = createSprite(windowWidth, 300, 10, 40);
  rubi.addImage(rubiIMG);
  rubi.x = Math.round(random(30,1000))
  rubi.y = Math.round(random(30,1000))
  rubi.velocityY= +(1 + score/10);
  rubi.scale = 0.1;
  rubi.lifetime = 300;
  rubiGroup.add(rubi); 
  } 
}

function rubi2G(){ if(frameCount %60 === 0){
  rubi2 = createSprite(windowWidth ,300, 10, 40);
  rubi2.addImage(rubi2IMG);
  rubi2.x = Math.round(random(30,1000))
  rubi2.y = Math.round(random(30,1000))
  rubi2.velocityY= +(1 + score/10);
  rubi2.scale = 0.1;
  rubi2.lifetime = 300;
  rubi2Group.add(rubi2); 
  } 
}

function rubi3G(){ if(frameCount %60 === 0){
  rubi3 = createSprite(windowWidth, 300, 10, 40);
  rubi3.addImage(rubi3IMG);
  rubi3.x = Math.round(random(30,1000))
  rubi3.y = Math.round(random(30,1000))
  rubi3.velocityY= +(1 + score/10);
  rubi3.scale = 0.1;
  rubi3.lifetime = 300;
  rubi3Group.add(rubi3); 
  } 
}