let cr0, cr1, cr2, cr3, cr4, cr5, cr6, cr7, cr8, cr9, cr10, cr11, cr12, cr13, cr14, cr15, cr16, cr17, cr18, cr19, cr20, cr21, cr22, cr23, cr24
let r = [];
let frameToShow = 0;
let time = 0;
let x = 0;

function preload() {
  cr0 = loadImage("images/cr_00000.png");
  cr1 = loadImage("images/cr_00001.png");
  cr2 = loadImage("images/cr_00002.png");
  cr3 = loadImage("images/cr_00003.png");
  cr4 = loadImage("images/cr_00004.png");
  cr5 = loadImage("images/cr_00005.png");
  cr6 = loadImage("images/cr_00006.png");
  cr7 = loadImage("images/cr_00007.png");
  cr8 = loadImage("images/cr_00008.png");
  cr9 = loadImage("images/cr_00009.png");
  cr10 = loadImage("images/cr_00010.png");
  cr11 = loadImage("images/cr_00011.png");
  cr12 = loadImage("images/cr_00012.png");
  cr13 = loadImage("images/cr_00013.png");
  cr14 = loadImage("images/cr_00014.png");
  cr15 = loadImage("images/cr_00015.png");
  cr16 = loadImage("images/cr_00016.png");
  cr17 = loadImage("images/cr_00017.png");
  cr18 = loadImage("images/cr_00018.png");
  cr19 = loadImage("images/cr_00019.png");
  cr20 = loadImage("images/cr_00020.png");
  cr21 = loadImage("images/cr_00021.png");
  cr22 = loadImage("images/cr_00022.png");
  cr23 = loadImage("images/cr_00023.png");
  cr24 = loadImage("images/cr_00024.png");
  r[0] = loadImage("images/r_00000.png");
  r[1] = loadImage("images/r_00001.png");
  r[2] = loadImage("images/r_00002.png");
  r[3] = loadImage("images/r_00003.png");
  r[4] = loadImage("images/r_00004.png");
  r[5] = loadImage("images/r_00005.png");
  r[6] = loadImage("images/r_00006.png");
  r[7] = loadImage("images/r_00007.png");
  r[8] = loadImage("images/r_00008.png");
  r[9] = loadImage("images/r_00009.png");
  r[10] = loadImage("images/r_00010.png");
  r[11] = loadImage("images/r_00011.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {

  background(255);
  //image(cr0, -70, 80, windowWidth, windowWidth/16*9);
  if(windowWidth <= 768){
    scale(0.5, 0.5);
    translate(500, -400);
    rabbitBack();
    scale(2, 2);
    translate(-250, 200);
    tortoiseMobile();
    rabbitFront();
    //rabbitFront();
  }
  else{
    translate(500, -400);
    rabbitBack();
    translate(-500, 400);
    tortoise();
    rabbitFront();
  }
  time++;
}
function tortoise()
{
  if(mouseX<windowWidth/25)
    image(cr0, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*2)
    image(cr1, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*3)
    image(cr2, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*4)
    image(cr3, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*5)
    image(cr4, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*6)
    image(cr5, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*7)
    image(cr6, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*8)
    image(cr7, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*9)
    image(cr8, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*10)
    image(cr9, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*11)
    image(cr10, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*12)
    image(cr11, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*13)
    image(cr12, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*14)
    image(cr13, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*15)
    image(cr14, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*16)
    image(cr15, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*17)
    image(cr16, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*18)
    image(cr17, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*19)
    image(cr18, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*20)
    image(cr19, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*21)
    image(cr20, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*22)
    image(cr21, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*23)
    image(cr22, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else if(mouseX<windowWidth/25*24)
    image(cr23, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
  else
    image(cr24, -70, windowHeight/2-windowWidth/16*9/2+50, windowWidth, windowWidth/16*9);
}
function tortoiseMobile()
{
  if(mouseX<windowWidth/25)
    image(cr0, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*2)
    image(cr1, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*3)
    image(cr2, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*4)
    image(cr3, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*5)
    image(cr4, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*6)
    image(cr5, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*7)
    image(cr6, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*8)
    image(cr7, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*9)
    image(cr8, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*10)
    image(cr9, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*11)
    image(cr10, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*12)
    image(cr11, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*13)
    image(cr12, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*14)
    image(cr13, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*15)
    image(cr14, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*16)
    image(cr15, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*17)
    image(cr16, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*18)
    image(cr17, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*19)
    image(cr18, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*20)
    image(cr19, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*21)
    image(cr20, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*22)
    image(cr21, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*23)
    image(cr22, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else if(mouseX<windowWidth/25*24)
    image(cr23, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
  else
    image(cr24, windowWidth/2-windowWidth*0.85, windowHeight/2-windowWidth/16*9*0.8, windowWidth*1.5, windowWidth/16*9*1.5);
}
function rabbitFront(){
  image(r[frameToShow], x, windowHeight - 450, 500, 500);
  if (time > 5) {
    frameToShow += 1;
    if (frameToShow >= r.length) {
      frameToShow = 0;
    }
    if (frameToShow == 6)
      x+=200;
    if(x >= windowWidth)
      x = -100;
    time = 0;
  }
}
function rabbitBack(){
  image(r[frameToShow], x, windowHeight - 450, 400, 400);
  if (time > 5) {
    frameToShow += 1;
    if (frameToShow >= r.length) {
      frameToShow = 0;
    }
    if (frameToShow == 6)
      x+=200;
    if(x - 500 >= windowWidth)
      x = -500;
    time = 0;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //window.location.reload();
}
