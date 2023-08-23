
var hero_1;
var hero_2;
var hero_3;
var hero_4;
var hero_5;
var hero_6;
var coinsGroup , coinImg
var backgroundImg;
var background;
var ground
var hero_1Img;
var hero_2Img;
var hero_3Img;
var hero_4Img;
var hero_5Img;
var hero_6Img;
var brick1,brick2,brick3,brick4,brick5;
function preload(){
  hero_1Img = loadAnimation("ironman1.png","ironman2.png","ironman3.png")
  hero_2Img = loadAnimation("Captainameria1.png","captain2.png","captain3.png")
  hero_3Img = loadAnimation("Black widow 1.png","Blackwidow2.png","blackwidow3.png")
  hero_4Img = loadAnimation("hulk1.png","hulk2.png","hulk3.png")
  hero_5Img = loadAnimation("thor1.png","thor2.png","thor3.png")
  hero_6Img = loadAnimation("hawkeye1.png","hawkeye2.png","hawkeye3.png")

  backgroundImg = loadImage("Infinite Background.png")
  coinImg = loadImage("Coin.png")
  brickImg = loadImage("Brick1.png")
}


function setup() {
  createCanvas(800,400);
  ground = createSprite(400,390,1200000,20)

  background = createSprite(800,400)
  


  hero_1= createSprite(50, 200, 50, 50);
  hero_2= createSprite(30, 50, 20, 20);
  hero_3= createSprite(60, 50, 20, 20);
  hero_4= createSprite(90, 50, 20, 20);
  hero_5= createSprite(120, 50, 20, 20);
  hero_6= createSprite(150, 50, 20, 20);

  hero_1.addAnimation("hero_1",hero_1Img)
  hero_2.addAnimation("hero_2",hero_2Img)
  hero_3.addAnimation("hero_3", hero_3Img)
  hero_4.addAnimation("hero_4", hero_4Img)
  hero_5.addAnimation("hero_5", hero_5Img)
  hero_6.addAnimation("hero_6", hero_6Img)

  hero_1.scale=0.3
  
  hero_2.scale=0.1
  hero_3.scale= 0.1
  hero_4.scale= 0.1
  hero_5.scale= 0.1
  hero_6.scale= 0.1
  hero_2.visible= false
  hero_3.visible= false
  hero_5.visible= false
  hero_6.visible= false
  hero_4.visible= false

  coinsGroup = createGroup()
 

  brick1= createSprite(400, 200, 50, 50);
  brick2= createSprite(800, 200, 50, 50);
  brick3= createSprite(1200, 200, 50, 50);
  brick4= createSprite(1500, 200, 50, 50);
  brick5= createSprite(1800, 200, 50, 50);
  brick1.addImage(brickImg)
  brick2.addImage(brickImg)
  brick3.addImage(brickImg)
  brick4.addImage(brickImg)
  brick5.addImage(brickImg)
  brick1.scale = 0.1
  brick2.scale = 0.1
  brick3.scale = 0.1
  brick4.scale = 0.1
  brick5.scale = 0.1

}

function keyPressed(){
  if(keyCode==32){
      hero_1.velocityY = -10
  }
}
function setHeroPositions(){
  hero_2.x = hero_1.x-90
  hero_3.x = hero_1.x-60
  hero_4.x = hero_1.x-30
  hero_5.x = hero_1.x
  hero_6.x = hero_1.x+30
}

function draw() {
 //background(255)
  image(backgroundImg,0,0,2000,400)
  


  setHeroPositions()
  if(keyIsDown(RIGHT_ARROW)){
    hero_1.x= hero_1.x+5 
  }

  if(keyIsDown(LEFT_ARROW)){
   hero_1.x = hero_1.x-5
  }
  



  if(hero_1.isTouching(brick2)){
    hero_3.visible=true
  }
    

  if(hero_1.isTouching(brick3)){
    hero_4.visible=true
  }
    
  if(hero_1.isTouching(brick4)){
    hero_5.visible=true
  }
    
  if(hero_1.isTouching(brick5)){
    hero_6.visible=true
  }
    
  if(hero_1.isTouching(brick1)){
    hero_2.visible=true
  }

 



  hero_1.collide(ground)

  hero_1.velocityY = hero_1.velocityY+0.5
  
  camera.position.x = hero_1.position.x;



  ground.visible = false



  spawnCoins()

  drawSprites();


}

function spawnCoins(){
  if(frameCount%100==0){
  coin = createSprite(800,10,50,50)
  coin.y = Math.round(random(300,350))
  coin.addImage(coinImg)
  coin.scale = 0.2
  coin.lifetime =200
  coin.velocityX= -5
  coin.depth = hero_1.depth
  coin.depth = hero_1.depth +1
  coinsGroup.add(coin)
  }
}
















