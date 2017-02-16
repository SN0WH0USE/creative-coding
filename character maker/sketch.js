
var hair;
var eyes;
var mouth;
var extra;
var skin;
var body;
var buttons;
var hairx=348;
var eyesx=348;
var mouthx=348;
var extrax=348;
var skinx=348;
var bodyx=348;


function preload(){
buttons=loadImage("textbox.jpg");
hair=loadImage("hair.jpf");
eyes=loadImage("eyes.jpf");
mouth=loadImage("mouth.jpf");
extra=loadImage("bonus.jpf");
skin=loadImage("skin.jpf");
body=loadImage("body.jpg");


}

function setup() {

  createCanvas(1104,1048);
  frameRate(60)

}

function draw() {
image(body,bodyx,0);
image(skin,skinx,0);
image(extra,extrax,0);
image(eyes,eyesx,0);
image(mouth,mouthx,0);
image(hair,hairx,0);
image(buttons,0,0);
//fill('red');
//rect(22,882,300,125);
}
function mousePressed() {
  //tried
  if (hairx>=-6048 && 43<mouseY && mouseY<125) {
  hairx-=756
} else if(hairx<=-6048 && 43<mouseY && mouseY<125){
  hairx=348
  }

  if (eyesx>=-6048 && 210<mouseY && mouseY<335) {
  eyesx-=756
} else if (eyesx<=-6048 && 210<mouseY && mouseY<335){
  eyesx=348
  }

  if (mouthx>=-6048 && 380<mouseY && mouseY<505) {
  mouthx-=756
} else if (mouthx<=-6048 && 380<mouseY && mouseY<505){
  mouthx=348
  }

  if (extrax>=-6048 && 547<mouseY && mouseY<672) {
  extrax-=756
} else if (extrax<=-6048 && 547<mouseY && mouseY<672) {
  extrax=348
  }

  if (skinx>=-6048 && 715<mouseY && mouseY<840) {
  skinx-=756
} else if (skinx<=-6048 && 715<mouseY && mouseY<840){
  skinx=348
  }

  if (bodyx>=-6048 && 882<mouseY && mouseY<1007) {
  bodyx-=756
} else if (bodyx<=-6048 && 882<mouseY && mouseY<1007) {
  bodyx=348
  }

}
