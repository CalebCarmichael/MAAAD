'use strict';
function setup() {
  createCanvas(1400, 1400, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.11);
  rotateZ(frameCount * 0.1);
  cylinder(100, 400);
}




