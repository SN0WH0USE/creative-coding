var r,g,b;

var rx, ry;

var bx=0
var by=0
var byb=0
var bxc=0
var byb, bxb, byc, bxc, byd, bxd;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  rx=floor(random(0,windowWidth));
  ry=floor(random(0,windowHeight));
   bxb=windowWidth;
   byc=windowHeight;
   byd=windowHeight;
   bxd=windowWidth;
   r= random(0,250);
   g= random(0,250);
   b= random(0,250);

   background(0);

}

function draw() {

  fill(r,g,b,50);
  //stroke(r/2,g/2,b/2);
  ellipse(bx,by,25,25);

  fill(r/2,g/2,b,50);
  ellipse(bxb,byb,25,25);

  fill(r*2,g*2,b*2,50);
  ellipse(bxc,byc,25,25);

  fill(r/2,g*2,b,50);
  ellipse(bxd,byd,25,25);

//noFill()
noStroke()
fill(0)
  rect(rx,ry,1,1);


  if (bx<rx) {
  bx+=2
  }
  if (bx>rx) {
  bx--
  }
  if (by<ry) {
  by++
  }
  if (by>ry) {
  by--
  }

  if (bxb<rx) {
  bxb++
  }
  if (bxb>rx) {
  bxb-=2
  }
  if (byb<ry) {
  byb++
  }
  if (byb>ry) {
  byb--
  }

  if (bxc<rx) {
  bxc++
  }
  if (bxc>rx) {
  bxc--
  }
  if (byc<ry) {
  byc+=2
  }
  if (byc>ry) {
  byc--
  }

  if (bxd<rx) {
  bxd++
  }
  if (bxd>rx) {
  bxd--
  }
  if (byd<ry) {
  byd++
  }
  if (byd>ry) {
  byd-=2
  }

   if (bx==rx && by==ry || bxb==rx && byb==ry || bxc==rx && byc==ry || bxd==rx && byd==ry) {
    rx=floor(random(0,windowWidth));
    ry=floor(random(0,windowHeight));
  }
}
