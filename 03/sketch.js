var x= 0;
var y = 0; 
var xn= 50;
var yn= 70;
var contador = 0; 
var cieloveces = 0;
var colorsky= 225;
var star= 0;
var xstar= 150; 
var xplane=0;
var yplane = 0; 
var xpd=0;
var ypd=0; 
var tran= 255;
var trand= 0;
var xpt= 0;
var ypt= 0; 
var velocidad = 0.1; 
var posx = 0;
var posy = 0;
var trant=0; 
var angulo = -90.0;
var desplazamiento = 800;
var escalar = -30;


function setup() {
  createCanvas(900, 600); 
  //background(155, 123, 92);
  //angleMode(DEGREES);

}


function draw() {
   background(155, 123, 92);
  noStroke();
  //cielo
  fill(colorsky-158, colorsky-31, colorsky);
  rect(0, 0, width, 400+y);
  y = y +0.5;
  colorsky = colorsky - 0.3;
  //nube 1
  fill(255, 255, 255);
  rect (xn, yn, 90, 10);
  bezier(xn, yn, xn, yn-20, xn+30, yn-20, xn+30, yn); 
  bezier(xn+30, yn, xn+30, yn-50, xn+90, yn-50, xn+90, yn); 
  //nube 2 
  rect (xn+650, yn+230, 90, 10);
  bezier(xn+650, yn+230, xn+650, yn+210, xn+680, yn+210, xn+680, yn+230); 
  bezier(xn+680, yn+230, xn+680, yn+180, xn+740, yn+180, xn+740, yn+230); 
  //estrellas
  fill(255, 255, 255, star);
  ellipse(xstar, 50, 3);
  ellipse(xstar+100, 150, 3);
  ellipse(xstar+180, 280, 3);
  ellipse(xstar+50, 350, 3);
  ellipse(xstar+20, 200, 3);
  ellipse(xstar+100, 60, 3);
  ellipse(xstar+200, 100, 3);
  ellipse(xstar+300, 120, 3);
  ellipse(xstar+400, 40, 3);
  ellipse(xstar+300, 120, 3);
  ellipse(xstar+300, 220, 3);
  ellipse(xstar+300, 370, 3);
  ellipse(xstar+400, 150, 3);
  ellipse(xstar+400, 30, 3);
  ellipse(xstar+400, 520, 3);
  ellipse(xstar+500, 440, 3);
  ellipse(xstar+500, 360, 3);
  ellipse(xstar+600, 20, 3);
  ellipse(xstar+600, 550, 3);

  //movement nubes
  contador= contador + 1;

  if (contador <= 650) {
    xn = xn+7; 
    // star = star + 0.2;
    if (xn>width) {
      xn = -width;
    }
  } else if (contador > 650) {
    xstar = xstar + 120;
    star = star + 2;
    if ( xstar > width) {
      xstar= -width;
    }
  }
// avión 
fill(255,tran);
noStroke(); 
triangle(xplane,yplane + 523, xplane+54,yplane+480,xplane+20,yplane+522);
triangle(xplane+49,yplane+534,xplane+30,yplane+524,xplane+54,yplane+480);
fill(216,tran);
triangle(xplane+37,yplane+529,xplane+30,yplane+524,xplane+27,yplane+534);
fill(155,tran);
triangle(xplane+21,yplane+522,xplane+27,yplane+534,xplane+54,yplane+480);

 
 xplane = (xplane +1);
 yplane = yplane - 1;
 
 if (xplane>100 && yplane<400){
   tran= tran- 3;
  
 }

 fill(216, trand);
 triangle(xpd+234,ypd+310,xpd+234,ypd+329,xpd+288,ypd+308);
 fill(155,trand);
 triangle(xpd+225,ypd+321,xpd+234,ypd+320,xpd+234,ypd+311);
  fill(255,trand);
 triangle(xpd+246,ypd+344,xpd+242,ypd+318,xpd+288,ypd+308);
 fill(155,trand);
 triangle(xpd+242,ypd+318,xpd+234,ypd+329,xpd+244,ypd+328);
 xpd = xpd +1;
 ypd = ypd -0.5;
 
 if(xpd>100 && ypd<250){
  trand= trand + 3; 
  if(xpd>260 && ypd<180){
    trand = trand-20;
  }
 }
 
 fill(216,trant);
triangle(xpt+587,226,xpt+524,222,xpt+530,209);
fill(155,trant);
triangle(xpt+524,222,xpt+533,216,535+xpt,223);
 fill(255,trant);
 triangle(xpt+527,196,xpt+587,226,xpt+530,209);
triangle(xpt+587,226,xpt+537,233,xpt+533,216);

xpt = xpt+1;

 if (xpt>200){
  trant+=2; 
 }


//cohete
desplazamiento--;
posx = desplazamiento - sin(angulo + 0.04)*escalar;
posy = desplazamiento + sin(angulo) * escalar;
fill(255);
bezier(posx+716,posy+408,posx+714,posy+460,posx+752,posy+506,posx+812,posy+518);
bezier(posx+716,posy+408,posx+788,posy+408,posx+826,posy+468,posx+826,posy+504);
bezier(posx+812,posy+518,posx+815,posy+504,posx+815,posy+504,posx+826,posy+504);
quad(posx+715,posy+419,posx+725,posy+409,posx+820,posy+504,posx+818,posy+516);
fill(0);
ellipse(posx+767,posy+459,35);
noFill();
strokeWeight(4);
stroke(255,0,0);
bezier(posx+719,posy+440,posx+731,posy+439,posx+747,posy+424,posx+748,posy+412);
bezier(posx+805,posy+518,posx+808,posy+505,posx+814,posy+500,posx+826,posy+497);
//ala 1
noStroke();
fill(255);
bezier(posx+769,posy+510,posx+771,posy+526,posx+784,posy+554,posx+809,posy+570);
bezier(posx+807,posy+522,posx+802,posy+533,posx+801,posy+533,posx+809,posy+570);
bezier(posx+769,posy+510,posx+780,posy+518,posx+800,posy+522,posx+807,posy+522);

//ala 2 

bezier(posx+818,posy+461,posx+848,posy+466,posx+869,posy+487,posx+878,posy+501);
bezier(posx+878,posy+501,posx+859,posy+493,posx+844,posy+493,posx+830,posy+499);
bezier(posx+818,posy+461,posx+822,posy+467,posx+830,posy+486,posx+830,posy+499);


angulo += velocidad;

}