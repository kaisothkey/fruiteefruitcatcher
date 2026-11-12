// fruitee

var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "START";

var startImg;
var fruit1; 
var fruit2;
var fruit3;
var fruit4;
var fruit5;
var basketImg;

function preload() {
  startImg = loadImage("orchard.jpeg");
  fruit1 = loadImage("apple.png");
  fruit2 = loadImage("banana.jpeg");
  fruit3 = loadImage("strawberry.png");
  fruit4 = loadImage("orange.jpeg");
  fruit5 = loadImage("watermelon.jpeg");
  basketImg = loadImage("basket.jpeg");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(20);
  imageMode(CENTER);
} // end of setup =========================================

function draw() {
  background(100, 200, 100);
  
  if (gameState == "START") {
    startScreen();
  }
    
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "L5") {
    levelFive();
  }
  
  if (gameState != "START") {
    noCursor();
    fill(0);
    text("score: " + score, width / 2, 40);
    image(basketImg, mouseX, mouseY, 70, 70);
  } 
} // end of draw =======================================

function startScreen() {
  cursor();
  
  image(startImg, width / 2, height / 2, width, height);
  
  fill(255);
  stroke(0);
  strokeWeight(4); 
  textSize(40);
  text("FRUITEE FRUIT CATCHER", width / 2, 180);
  
  fill(100, 200, 100);
  stroke(255);
  strokeWeight(3);
  rect(width / 2, 350, 180, 60, 15);
  
  noStroke();
  fill(255);
  textSize(28);
  text("PLAY", width / 2, 350);
  
  textSize(20);
} // end of startScreen ==============================================


function mousePressed() {
  if (gameState == "START") {
    if (mouseX > width / 2 - 90 && mouseX < width / 2 + 90 &&
        mouseY > 350 - 30 && mouseY < 350 + 30) {
      gameState = "L1";
    }
  }
} // end of mousePressed =============================================

function levelOne() {
  text("level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 5) {
    gameState = "L2";
  }
  
  image(fruit1, ballx, bally, ballSize, ballSize);
} // end of level 1 ====================================

function levelTwo() {
  background(200, 100, 0);
  text("level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 10) {
    gameState = "L3";
  }
  
  image(fruit2, ballx, bally, ballSize, ballSize);
} // end of level 2 =====================================

function levelThree() {
  background(255, 150, 200);
  text("level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
  }
  if (score >= 15) {
    ballSize = 40;
    gameState = "L4";
  }
  
  image(fruit3, ballx, bally, ballSize, ballSize);
} // end of level 3 =====================================

function levelFour() {
  background(135, 206, 250); // Sky Blue
  text("level 4", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 20) {
    gameState = "L5";
  }
  
  image(fruit4, ballx, bally, ballSize, ballSize);
} // end of level 4 =====================================

function levelFive() {
  background(216, 191, 216);
  text("level 5", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    if (ballSize > 15) { 
      ballSize = ballSize - 4;
    }
  }
  if (score >= 25) {
    background(255, 223, 0);
    textSize(40);
    text("YOU WIN!", width / 2, height / 2);
    textSize(20);
  } else {
    image(fruit5, ballx, bally, ballSize, ballSize);
  }
} // end of level 5 =====================================
