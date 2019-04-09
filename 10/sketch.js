var datos;
var img;
var boton1;
var boton2;
var boton3;
var boton4;
var boton5;
var boton6;
var posXButt = 105;
var butt1 = 338;
var butt2 = 405;
var butt3 = 472;
var butt4 = 540;
var butt5 = 608;
var butt6 = 676;
var sizebutt = 49;
var tool = 0;
function preload(){
 datos = loadJSON("data.json");
  img= loadImage("BG.png");
   boton1 = loadImage('01.png');
  boton2 = loadImage('02.png');
  boton3 = loadImage('03.png');
  boton4 = loadImage('04.png');
  boton5 = loadImage('05.png');
  boton6 = loadImage('06.png');
}

function setup() {
  createCanvas(991, 1024);
     background(255);
  image(img,0,0);
}

function draw() {
 //Botones
  image(boton1,105,338,sizebutt,sizebutt);
  image(boton2,105,405,sizebutt,sizebutt);
  image(boton3, 105,472,sizebutt,sizebutt);
  image(boton4,105,540,sizebutt,sizebutt);
  image(boton5,105,608,sizebutt,sizebutt);
  image(boton6,105,676,sizebutt,sizebutt);
  let n = 0.5;
  noStroke();
  //Carlisle
  fill(random(255),0,0);
  ellipse(436 + n, 96 + n,15);
  //Blackpool
  ellipse(383 + n, 314 + n,15);
  //Blackburn
  ellipse(448 + n, 333 + n,15);
  //Liverpool
  ellipse(374 + n, 391 + n,15);
  //Manchester
  ellipse(466 + n, 406 + n,15);
  //Stoke
  ellipse(448 + n, 501 + n,15);
  //Telford
  ellipse(410 + n, 566 + n,15);
  //Birmingham
  ellipse(474 + n, 614 + n,15);
  //Conventry
  ellipse(519 + n, 641 + n,15);
  //Northampton
  ellipse(589 + n, 691 + n,15);
  //Gloucester
  ellipse(402 + n, 736 + n,15);
  //Bristol
  ellipse(351 + n, 796 + n,15);
  //Oxford
  ellipse(526 + n, 785 + n,15);
  //Milton
  ellipse(597 + n, 736 + n,15);
  //Luton
  ellipse(643 + n, 777 + n,15);
  //Watford
  ellipse(631 + n, 822 + n,15);
  //LONDON
  ellipse(680, 853 ,35);
  //Southampton
  ellipse(482 + n, 947 + n,15);
  //Crawley
  ellipse(643 + n, 936 + n,15);
  //Cambridge
  ellipse(726, 713 + n,15);
  fill(0);
  if(mouseIsPressed == true){
    var cuantos = datos.Details.length;
    var tipo = datos.Details;
    print(cuantos);
    if(tool == 1){
      print('hola');
      for(var i = 0; i<cuantos;i++){
        print(tipo[i].Cuisines[0].Name);
        var comida =tipo[i].Cuisines;
    var cuantos2 = tipo[i].Cuisines.length;
        for(var j = 0; j<cuantos2; j++){
       print(comida[j].Name);
        }
      }     
    }
    
    //Area sensible de los botones
    if ((mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt1 && mouseY < butt1 + sizebutt)) {
      //background(100);
      tool = 1;

    }

    if ((mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt2 && mouseY < butt2 + sizebutt)) {
      //background(100);
      tool = 2;

    }

    if (mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt3 && mouseY < butt3 + sizebutt) {

      tool = 3;
    }

    if (mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt3 && mouseY < butt3 + sizebutt) {
      //background(100);
      tool = 4;

    }

    if (mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt4 && mouseY < butt4 + sizebutt) {
      //background(100);
      tool = 5;

    }

    if (mouseX > posXButt && mouseX < posXButt + sizebutt && mouseY > butt4 && mouseY < posyb + butt4) {
      //background(100);
      tool = 6;

    }

   var place = datos.Details[0].Address.City;
  text(place,50,50);}
}