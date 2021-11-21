var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6154c7db-fbe5-425b-8744-d991078ed461","c42bd040-88f2-41b3-8631-ccf96d16af6f","8a699124-f983-4cc0-8384-0d4cdb70955c","e01aa168-39bc-4c3e-8ac1-f5afcae3a973"],"propsByKey":{"6154c7db-fbe5-425b-8744-d991078ed461":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"IFhQi7t_b8d62amf3eRCx2ic36FKzVWd","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/6154c7db-fbe5-425b-8744-d991078ed461.png"},"c42bd040-88f2-41b3-8631-ccf96d16af6f":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"8a699124-f983-4cc0-8384-0d4cdb70955c":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"e01aa168-39bc-4c3e-8ac1-f5afcae3a973":{"name":"won","sourceUrl":null,"frameSize":{"x":400,"y":202},"frameCount":1,"looping":true,"frameDelay":12,"version":"_0asfBUo7BoMzDXkejYwkQWC9BAzrddI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":202},"rootRelativePath":"assets/e01aa168-39bc-4c3e-8ac1-f5afcae3a973.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var parkline1 = createSprite(windowWidth/2+50, windowHeight/2-140,15,160);
var parkline2 = createSprite(windowWidth/2-50, windowHeight/2-320,15,160);

var line1 = createSprite(windowWidth/2-35, windowHeight/2-400,15,30);
var line2 = createSprite(windowWidth/2+35, windowHeight/2-400,15,30);

var parkline3 = createSprite(windowWidth/2+80,  windowHeight/2-320,15,160);
var parkline4 = createSprite(windowWidth/2+180,  windowHeight/2-320,15,160);

var parkline5 = createSprite(windowWidth/2-80,  windowHeight/2-320,15,160);
var parkline6 = createSprite(windowWidth/2-180,  windowHeight/2-320,15,160);
var parkline7 = createSprite(windowWidth/2-130,  windowHeight/2-50,120,15);




var wall3 = createSprite(windowWidth/2,400,windowWidth+600,20);
var wall4 = createSprite(windowWidth/2,windowHeight/2+620,windowWidth+600,20);

var playerCar = createSprite(windowWidth/2-240,windowHeight/2-190);
var car1 = createSprite(windowWidth/2-130,-110);
var car2 = createSprite(windowWidth/2+130,-110);

var level1 = 0;
var level1Won = 1;
var level1lose = 2;
var gameState = 0;

var up, left , down, right;
var upImg , downImg, leftImg, rightImg;
var touches =[];
var na, na1,na2,na3,na4;
var cardrive;
var playerCarImg;

function preload(){
  
  upImg = loadImage("up.gif");
  downImg = loadImage("down.gif");
  rightImg = loadImage("right.gif");
  leftImg = loadImage("left.gif");
  playerCarImg = loadImage("car.gif");



}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
  camera.zoom = camera.zoom-0.3;
 
 
  wall4.shapeColor = "yellow";
  parkline7.shapeColor = "black";


  
  up = createSprite(windowWidth/2-300,windowHeight-150,50,50);
  

  down = createSprite(windowWidth/2+300,windowHeight-150,50,50);
  

  left = createSprite(windowWidth/2-280,windowHeight-50,50,50);
 
  
  right = createSprite(windowWidth/2+280,windowHeight-50,50,50);
  space = createSprite(windowWidth/2,windowHeight-60,300,40);

  

  na = createSprite(windowWidth/2-410,windowHeight-100);
  na1 = createSprite(windowWidth/2+410,windowHeight-100);
  na2 = createSprite(windowWidth/2-390,windowHeight+20);
  na3 = createSprite(windowWidth/2+390,windowHeight+20);
  na4 = createSprite(windowWidth/2,windowHeight+20,300,40);

  na.scale= 0.07;
  na.addImage(upImg);
  na1.scale= 0.2;
  na1.addImage(downImg);
  na2.scale= 0.2;
  na2.addImage(leftImg);
  na3.scale= 0.2;
  na3.addImage(rightImg);

  
  car1.velocityX = 7;
  playerCar.x = parkline6.x+50;

}

function draw() {
  
  if(gameState === level1){
  background(rgb(199,238,255));

  

  
    wall3.y = parkline1.y-80;
    car1.y = wall3.y+290;
    car2.y = wall3.y+90;

    // car1.x = parkline3.x-210;
    // car2.x = parkline5.x+210;

   

     if(car1.x <= 300){
      car1.velocityX = 15;
     }
     if(car1.x >= 800){
      car1.velocityX = -13;

     }

     if(playerCar.collide(parkline7)){

       parkline7.y =parkline7.y+1.7;

     }

   

    line1.y = wall3.y+20;
    line2.y = wall3.y+20;

    fill("red");
    stroke("purple");
    strokeWeight(2);
    textSize(18);
    text("YOU", playerCar.x-19,playerCar.y+80);

    fill("white");
    stroke("red");
    strokeWeight(2);
    textSize(18);
    textFont("CALVIN");
    text("PRESS THIS TO PARK THE CAR", na4.x-135,na4.y-30);
    noStroke();
    noFill();



    parkline2.y = wall3.y+80;
    parkline3.y = wall3.y+80;
    parkline4.y = wall3.y+80;
    parkline5.y = wall3.y+80;
    parkline6.y = wall3.y+80;
    


    up.visible = false;
    down.visible = false;
    left.visible = false;
    right.visible = false;
    space.visible = false;

   playerCar.addImage(playerCarImg);
   car1.setAnimation("car2");
   car2.setAnimation("car3");
    wall3.shapeColor = "yellow";
    na4.shapeColor = "purple";

   parkline1.shapeColor = "lightgreen";
  parkline2.shapeColor = "lightgreen";
   parkline3.shapeColor = "black";
  parkline4.shapeColor = "black";
  parkline5.shapeColor = "black";
  parkline6.shapeColor = "black";
  
  // camera.isActive()
  // camera.on();
  
  // camera.y = playerCar.y;
  
  if(playerCar.isTouching(parkline1)||playerCar.isTouching(parkline2)){
    parkline1.shapeColor = "red";
  parkline2.shapeColor = "red";
    
  }
  
  if(playerCar.isTouching(line1)&& playerCar.isTouching(line2)){
     wall3.shapeColor = "purple";
     
     if(keyWentDown("space")&& gameState===level1){
       
         gameState = level1Won;
         
       var won = createSprite(World.width/2,World.height/2);
       won.setAnimation("won");
       won.scale=0.6;
       
     
     }

     if(mousePressedOver(space)&& gameState===level1){
       
      gameState = level1Won;
      
    var won = createSprite(World.width/2,wall3.y+230);
    won.setAnimation("won");
    won.scale=0.6;
    
  
  }
  
  }
  
  
    playerCar.collide(wall3);
    playerCar.collide(wall4);
    playerCar.collide(car1);
    playerCar.collide(car2);
    playerCar.collide(parkline3);
    playerCar.collide(parkline4)
    playerCar.collide(parkline5)
    playerCar.collide(parkline6)

    line1.visible= false;
     line2.visible= false;
    
     if(playerCar.x < -40){
      gameState = 2;
     }

     if(playerCar.x > 1200){
      gameState = 2;
     }
    
  
  controls();

  }
  
  if(gameState === level1Won){
    
    if(mousePressedOver(space)&&gameState === level1Won){
      
      textSize(22);
      textFont("CALVIN");
      fill(rgb(186,92,229));
      stroke("red");
      strokeWeight(2);
     text("GO BACK AND PLAY NEXT LEVEL ",windowWidth/2-165,wall3.y+320);
     car1.destroy();
      
    }
 
  }

  if(gameState === 2){
    
   

    textSize(40);
    textFont("CALVIN");
    fill(rgb(186,92,229));
    stroke("red");
    strokeWeight(2);
   text("YOU LOSE ",windowWidth/2-100,windowHeight/2);
   textSize(20);
   text("PRESS BACK TO REPLAY ",windowWidth/2-100,windowHeight/2+160);
   car1.velocityX = 0;
   playerCar.velocityX = 0;

  }

   if(//mousePressedOver(space)&& 
   keyDown("space")&&gameState === 2){
      
    playerCar.x = windowWidth/2-240
    playerCar.y = windowHeight/2-190
    

   
    
  }

  
  console.log(gameState);
  
  //   camera.isActive()
  // camera.on();
  
  // camera.y = windowHeight/2;

  // camera.isActive()
  // camera.on();

  // camera.x = windowWidth/2;
  
  drawSprites();

}

function controls(){
  
  if(keyDown(UP_ARROW)){
    playerCar.y = playerCar.y-10;
    
  }
   if(keyDown(DOWN_ARROW)){
    playerCar.y = playerCar.y+10;
    
  }
  if(keyDown(LEFT_ARROW)){
    playerCar.x = playerCar.x-10;
    // playerCar.setAnimation("carleft");
  }
  if(keyDown(RIGHT_ARROW)){
    playerCar.x = playerCar.x+10;
    // playerCar.setAnimation("carright");
  }
  
 



  if(mousePressedOver(down)) {

    playerCar.y = playerCar.y+18;
    // cardrive.play();
  
  }

  if(mousePressedOver(up)) {

    playerCar.y = playerCar.y-18;
    // cardrive.play();
  }

  if(mousePressedOver(left)) {
    playerCar.x = playerCar.x-18;
    // cardrive.play();
  }
 
  if(mousePressedOver(right)) {
  //   cardrive.play();
    playerCar.x = playerCar.x+18;

  }



  
  
  
  
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
