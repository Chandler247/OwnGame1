var girl, monkey, coconut, crab, island;
var edges;
var score;
var gameState="play";

function preload(){
  girlImg = loadImage('runningGirl.png');
  monkeyImg = loadImage('monkey.png');
  coconutImg = loadImage('coconuts.png');
  crabImg = loadImage('angryCrab.png');
  islandImg = loadImage('island.png');
  greenCrabImg = loadImage('green_crab.png');
  pinkCrabImg = loadImage('pink_crab.png');
}

function setup(){
  canvas = createCanvas(800,400);

  score=0;

  island = createSprite(350,210,100,100);
  island.addImage(islandImg);
  island.velocityX=-3;
  island.scale=2;

  girl = createSprite(100,320,50,50);
  girl.addImage(girlImg);
  girl.scale=0.3;

  crabsGroup = new Group();
  coconutsGroup = new Group();

}

function draw(){
  background("blue");

  edges=createEdgeSprites();
  girl.collide(edges);

  if(gameState==="play"){
    if(island.x<287){
      island.x=988;
    }

    if(keyDown("space")){
      girl.velocityY=-4;
    }
    girl.velocityY=girl.velocityY+0.5

    if(girl.isTouching(coconutsGroup)){
      coconutsGroup.destroyEach();
      score=score+1;
    }
    
    if(girl.isTouching(crabsGroup)){
      gameState="end";
    }
    crabs();
    coconuts();
  }

  else if(gameState==="end"){
    score = 0;
    crabsGroup.setVelocityEach(0);
    crabsGroup.setLifetimeEach(-3);
    island.velocityX=0;
    coconutsGroup.setVelocityEach(0);
    coconutsGroup.setLifetimeEach(-3);
  }

  drawSprites();

  textSize(30);
  fill("black");
  text("Food: "+score,600,75);

  }

function crabs(){
  if(frameCount%200===0){
  crab=createSprite(740,350,50,50);
  var rand=Math.round(random(1,3));
  crab.scale=0.1;
  switch(rand){
    case 1: crab.addImage(crabImg);
      crab.scale=0.3;
    break;
    case 2: crab.addImage(greenCrabImg);
    break;    
    case 3: crab.addImage(pinkCrabImg);
    break;
    default: break;
  }
  crab.velocityX=-3;
  crabsGroup.add(crab);
  crab.lifetime=267;
  }

}

function coconuts(){
  if(frameCount%315===0){
  coconut=createSprite(740,355,50,50);
  coconut.addImage(coconutImg);
  coconut.scale=0.1;
  coconut.velocityX=-3;
  coconutsGroup.add(coconut);
  coconut.lifetime=267;
  }

}