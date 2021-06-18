var runner,path,invisible,energe,bomb,gameovr



function preload(){
  //pre-load images
 runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg =loadImage("path.png");
 energyImg=loadImage("energyDrink.png")
gameoverImg=loadImage("GameOver.png")
bombImg=loadImage("bomb.png")


}
function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg);
   path.velocityY= 30
   
   

 runner = createSprite(300,300);
runner.scale =0.1
runner.addAnimation("running", runnerImg);
console.log(runner.velocityY)

invisible=createSprite(200,380,500,15)
invisible.visible=false
 
bomb=createSprite(200,-10)
  bomb.addImage(bombImg)
  bomb.scale=0.09
  bomb.velocityY=+10

  bomb0=createSprite(290,0)
  bomb0.addImage(bombImg)
  bomb0.scale=0.09
  bomb0.velocityY=+20

  bomb1=createSprite(150,-1000)
  bomb1.addImage(bombImg)
  bomb1.scale=0.09
  bomb1.velocityY=+40
  
  bomb2=createSprite(150,-2000)
  bomb2.addImage(bombImg)
  bomb2.scale=0.09
  bomb2.velocityY=+50
  
  bomb3=createSprite(150,-400)
  bomb3.addImage(bombImg)
  bomb3.scale=0.09
  bomb3.velocityY=+80


  bomb4=createSprite(200,-60)
  bomb4.addImage(bombImg)
  bomb4.scale=0.09
  bomb4.velocityY=+9

  bomb5=createSprite(290,-200)
  bomb5.addImage(bombImg)
  bomb5.scale=0.09
  bomb5.velocityY=+8

  




}


function draw() {
  background("black");
 
 runner.x=mouseX
  if(path.y > 400){
    path.y = height/2;
     }
   
if(runner.isTouching(bomb)||runner.isTouching(bomb0)||runner.isTouching(bomb1)||runner.isTouching(bomb2)||runner.isTouching(bomb3)||runner.isTouching(bomb4)||runner.isTouching(bomb5)){

path.velocity=0
gameover=createSprite(200,200)
gameover.addImage(gameoverImg)
gameover.scale=1.0
}


    
  runner.collide(invisible)
  drawSprites()
}
