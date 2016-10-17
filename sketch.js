var xpos,ypos;
var ySize;
var liqcolor,solcolor;
var shtext,shmtext;
var boilpt;
var flame;
var templ,tempf;
var running;
var ssize;
var metal;

function setup() {
  canvas = createCanvas(640, 800);
  frameRate(30);

  
  aSlider = createSlider(1,5,2);
  aSlider.position(10, 220);
  aSlider.mousePressed(filler);
  aSlider.mouseReleased(filler);
  aSlider.class("sim-slider");
  
  abSlider = createSlider(5,30,10);
  abSlider.position(480, 220);
  abSlider.mousePressed(filler);
  abSlider.mouseReleased(filler);
  abSlider.class("sim-slider");
  
  tempWSlider = createSlider(1,300,20);
  tempWSlider.position(10, 290);
  tempWSlider.mousePressed(filler);
  tempWSlider.mouseReleased(filler);
  tempWSlider.class("sim-slider");
  
  tempiSlider = createSlider(1,300,20);
  tempiSlider.position(480, 290);
  tempiSlider.mousePressed(filler);
  tempiSlider.mouseReleased(filler);
  tempiSlider.class("sim-slider");


  
  metalButton = createButton('CALC');
  metalButton.position(20,100);
  metalButton.mouseClicked(togglePlayButton);
  metalButton.class("sim-button");
  
  
  radioVert = createRadio();
  radioVert.position(0,330);
  radioVert.option('Water', '#A8D9ED');
  radioVert.option('Olive Oil', '#E6E0A8');
  radioVert.option('Mercury', '#C4C4C4');
  
  radioVert.class('sim-radio vertical');
  radioVert.changed(switchColor);
  
  radio2Vert = createRadio();
  radio2Vert.position(490,330);
  radio2Vert.option('Iron', '#A1A5A6');
  radio2Vert.option('Coal', '#4A4A4A');
  radio2Vert.option('Copper', '#DEB100');
  
  radio2Vert.class('sim-radio vertical');
  radio2Vert.changed(switchColor2);
  
  
  liquidc = color('#7D7D7D');
  solcolor=125,125,125,0;
  liqcolor=125,125,125,255;
}

function draw() {
background('lightgray');
  fill("black");
  textSize(15);
  textStyle(NORMAL);
  text("Amount of Liquid (kg)",7,216);
  text("Mass of Item (kg)",477,216);
  text("Temperature of Liquid (C)",7,286);
    text("Temperature of Item (C)",477,286);
  text("Specific Heat: ",10,600);
  text(shtext+" J/kgC ",105,600);
  text(shmtext+" J/kgC ",477,600);
  text( tempWSlider.value()+"C ",160,317);
  text( tempiSlider.value()+"C ",440,317);
  text(aSlider.value()+" kg ",160, 247);
  text(abSlider.value()+" kg ",430, 247);

  
  textSize(18);


  textSize(18);
  text("Q = (Mass)(Specific Heat)(Tempf-Tempi)",20,58);
  textSize(25);
  text("Equilibrium = Q1 + Q2 + ... = 0",20,85);
  
///////////////////////////////////////////////////////////////////////////////////////////
if (flame==true){
drawFlame();

tempf=((aSlider.value()*shtext*tempWSlider.value())+(abSlider.value()*shmtext*tempiSlider.value()))/
	((aSlider.value()*shtext)+(abSlider.value()*shmtext))

textSize(15);	
text("Place solid into the liquid.",150,130);

if(mouseX>230 && mouseX<410 && mouseY>ypos && mouseY< (ypos + ySize)){;
textSize(35);
text("Equilibrium (Final Temp)",7,730);
text(int(tempf)+" C",7,680);
}
}


noStroke();// Flames
rectMode(CORNER);
fill('#E69539');
rect(220,620,200,30);   

drawContainer();
drawStove();
rectMode(CORNER);  
  fill(liquidc);
  rect(230,ypos,180,ySize);
if (metal==true){
  rectMode(CENTER);
  ssize = abSlider.value()*2;
  fill(solcolor);
  rect(mouseX,mouseY,ssize,ssize	);
  rectMode(CORNER);
}


ySize=aSlider.value()*40;

if (aSlider.value()==1){
ypos=560;
}
if (aSlider.value()==2){
ypos=520;
}
if (aSlider.value()==3){
ypos=480;
}
if (aSlider.value()==4){
ypos=440;
}
if (aSlider.value()==5){
ypos=400;
}

if (radioVert.value() == '#A8D9ED') {
shtext=4186;


}

if (radioVert.value() == '#E6E0A8') {
shtext=1970;

}

if (radioVert.value() == '#C4C4C4') {
shtext=140;

}
///////////////////////////////////////  

if (radio2Vert.value() == '#A1A5A6') {
shmtext=450;
metal=true;


}

if (radio2Vert.value() == '#4A4A4A') {
shmtext=300;
metal=true;

}

if (radio2Vert.value() == '#DEB100') {
shmtext=390;
metal=true;
	

}
  


    }





function filler(){

}

function togglePlayButton(){
if (!running){
running = true;
flame=true;
return
}
if (running){
      running = false;
      flame=false;
      return
    }
}

function drawContainer(){
  noStroke();
  rectMode(CORNER);
  fill(125,125,125,255);
  rect(220,400,200,225);
}

function drawFlame(){
  noStroke();
  rectMode(CORNER);
  fill('#E69539');
  rect(220,620,200,30);
}


function drawStove(){
  noStroke();
  rectMode(CORNER);
  fill(100,100,100,255);
  rect(200,635,240,30);
  rect(238,615,10,30);
  rect(275,615,10,30);
  rect(315,615,10,30);
  rect(355,615,10,30);
  rect(394,615,10,30);
}


function switchColor(){
  liquidc = radioVert.value();
}

function switchColor2(){
  solcolor = radio2Vert.value();
}

