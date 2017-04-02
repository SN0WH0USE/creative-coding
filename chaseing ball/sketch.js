var r,g,b;
var o=300;
var rx, ry;

var bx=0
var by=0
var byb=0
var byb, bxb, byc, bxc;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  rx=floor(random(0,windowWidth));
  ry=floor(random(0,windowHeight));
   bxb=windowWidth;
   bxc=floor(windowWidth/2);
   byc=windowHeight;
   r= random(0,250);
   g= random(0,250);
   b= random(0,250);


}

function draw() {
  background(255,255,255,7);

  fill(r,g,b,o);
  o--
  if (o<=0) {
    rx=-10
    ry=-10
  }
  //stroke(r/2,g/2,b/2);
  ellipse(bx,by,25,25);

  fill(r/2,g/2,b/2,o);
  triangle(bxb,byb, bxb+25,byb ,bxb+12.5,byb+20);


  fill(r/3,g*2,b*2,o);
  rect(bxc,byc,25,25);

//noFill()
noStroke()
fill("yellow")
  rect(rx,ry,20,20);


  if (bx<rx) {
  bx+=3
  }
  if (bx>rx) {
  bx-=2
  }
  if (by<ry) {
  by+=3
  }
  if (by>ry) {
  by-=2
  }

  if (bxb<rx) {
  bxb+=1
  }
  if (bxb>rx) {
  bxb-=2
  }
  if (byb<ry) {
  byb+=3
  }
  if (byb>ry) {
  byb-=4
  }

  if (bxc<rx) {
  bxc+=4
  }
  if (bxc>rx) {
  bxc-=3
  }
  if (byc<ry) {
  byc+=2
  }
  if (byc>ry) {
  byc-=1
  }


   if (bx==rx && by==ry || bxb==rx && byb==ry || bxc==rx && byc==ry) {
    rx=floor(random(0,windowWidth));
    ry=floor(random(0,windowHeight));
    o=300
  }
}
