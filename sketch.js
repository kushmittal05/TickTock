var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(0,0,0); 
  angleMode(DEGREES);

  translate(200,200);
  //rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr % 12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);

  stroke(255,0,0);
  fill("black");
  strokeWeight(7);
  arc(0,0,300,300,0,secAngle);

  stroke(0,0,255);
  fill("black");
  strokeWeight(7);
  arc(0,0,280,280,0,minAngle);

  stroke(0,255,0);
  fill("black");
  strokeWeight(7);
  arc(0,0,260,260,0,hrAngle);

  push();
  
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  
  push();
  
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,85,0);
  pop();


  

  drawSprites();
}