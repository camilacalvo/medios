var bgcolor;
var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var boton7;
var boton8;
var boton9;
var posyb= 19;
var posb1=20;
var posb2=60;
var posb3=100;
var posb4= 140;
var posb5= 180;
var posb6= 220;
var posb7= 260;
var posb8= 300;
var posb9 = 340;

var tamb = 40;

var tool= 0;
var color = 0;

var degrade = 250; 

var hue;

var sliderbrush;
var slidereraser;
var sliderb1;


function setup() {
  
  hue = 0;
  bgcolor = color(255,255,255);
  createCanvas(windowWidth, windowHeight);
 background(255);
  boton1 = createImg('botonesmedios-01.png');
boton1.position(posb1,posyb);

  boton2 = createImg('botonesmedios-02.png');
boton2.position(posb2,posyb);
  
  boton3 = createImg('botonesmedios-03.png');
boton3.position(posb3,posyb);
  
  boton4 = createImg('botonesmedios-04.png');
boton4.position(posb4,posyb);
  
  boton5 = createImg('botonesmedios-05.png');
boton5.position(posb5,posyb);
  
  boton6 = createImg('botonesmedios-06.png');
boton6.position(posb6,posyb);
  
  boton7 = createImg('botonesmedios-07.png');
boton7.position(posb7,posyb);
  
  boton8 = createImg('botonesmedios-08.png');
boton8.position(posb8,posyb);
  
  boton9 = createImg('botonesmedios-09.png');
boton9.position(posb9,posyb);
  
  sliderbrush = createSlider(5,100,0);
  sliderbrush.position(20,windowHeight-30);
  
  slidereraser = createSlider(10,100,0);
  slidereraser.position(160,windowHeight-30);
  
  sliderb1 = createSlider(10,windowWidth,0);
  sliderb1.position(300,windowHeight - 30); 
}


function draw() {
  //background(bgcolor);
  //rect(60,19,40,40);
  if(mouseIsPressed == true){
    
    if (tool == 1) {
      noStroke();
      fill(0);
      ellipse(mouseX, mouseY, sliderbrush.value(), sliderbrush.value());
      //line(mouseX, mouseY, width/2, height/2);
    }  
    else if (tool == 2) {
      //rect(mouseX, mouseY, 20, 20);     
     // line(mouseX-10, mouseY-10, mouseX+10, mouseY+10);
      noStroke();
      fill(degrade,degrade,degrade);
      rect(mouseX,mouseY,windowWidth/4,windowHeight/4);
      degrade -= 1;
    }
    else if (tool == 3) {
      bgcolor = color(random(255),random(255),random(255));
      fill(bgcolor);
      rect(0,0,windowWidth,windowHeight);
    }
    
    else if (tool == 4){
      noStroke();
     fill(bgcolor);
      ellipse(mouseX,mouseY,slidereraser.value(),slidereraser.value());
      
    }
    
    else if (tool == 5) {
      
      mouseDragged();
    }
    
    else if (tool == 6) {
      
      mouseClicked();
    }
    
    else if (tool == 7) {
      
     line(sliderb1.value(), sliderb1.value(), mouseX, mouseY); 
    }
  
  
  if((mouseX > posb1  && mouseX < posb1 + tamb && mouseY > posyb && mouseY < posyb + tamb)) {
      //background(100);
      tool = 1;
    
  }
  
  if((mouseX > posb2  && mouseX < posb2 + tamb && mouseY > posyb && mouseY < posyb + tamb)) {
      //background(100);
      tool = 2;
    
  }
    
    if(mouseX> posb3 && mouseX < posb3 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      
      tool = 3;
    }
  
   if(mouseX > posb4  && mouseX < posb4 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 4;
    
  }
    
    if(mouseX > posb5  && mouseX < posb5 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 5;
    
  }
    
     if(mouseX > posb6  && mouseX < posb6 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 6;
    
  }
    
     if(mouseX > posb7  && mouseX < posb7 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
       print("si");
      tool = 7;
    
  }
  }
     
  
  function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 50, 50);
}
     



}
