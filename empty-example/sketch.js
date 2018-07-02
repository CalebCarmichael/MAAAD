'use strict';
function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(20, 50);
}
var x = 200;
var y = 200;


function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);
  
  //x = x + 1;
 
    
  if (x >= 400){
   x = 0; 
  }
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 150;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 150;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 150;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 150;
  }
  
}
