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
var posyb = 19;
var posb1 = 20;
var posb2 = 60;
var posb3 = 100;
var posb4 = 140;
var posb5 = 180;
var posb6 = 220;
var posb7 = 260;
var posb8 = 300;
var posb9 = 340;

var tamb = 40;

var tool = 0;
var color = 0;

var degrade = 250;

var hue;

var sliderbrush;
var slidereraser;
var sliderb1;
var sliderR;
var sliderG;
var sliderB;

//Strings de letras
let s = 'tamaño pincel';
let d = 'tamaño borrador';
let f = 'coordenada 1 pincel 2';

//Sliders para cambiar los colores
let r = 'R';
let g = 'G';
let b = 'B';

function setup() {
  //variable para la herramienta rainbow
  hue = 0;
  //color del canvas inicial
  bgcolor = color(255, 255, 255);
  
  //creacion del canvas con tamaño ajustable
  createCanvas(windowWidth, windowHeight);
  //Creación iconos y posiciones de las herramientas
  boton1 = createImg('botonesmedios-01.png');
  boton1.position(posb1, posyb);

  boton2 = createImg('botonesmedios-02.png');
  boton2.position(posb2, posyb);

  boton3 = createImg('botonesmedios-03.png');
  boton3.position(posb3, posyb);

  boton4 = createImg('botonesmedios-04.png');
  boton4.position(posb4, posyb);

  boton5 = createImg('botonesmedios-05.png');
  boton5.position(posb5, posyb);

  boton6 = createImg('botonesmedios-06.png');
  boton6.position(posb6, posyb);

  boton7 = createImg('botonesmedios-07.png');
  boton7.position(posb7, posyb);

  boton8 = createImg('botonesmedios-08.png');
  boton8.position(posb8, posyb);

  boton9 = createImg('botonesmedios-09.png');
  boton9.position(posb9, posyb);

  //Creación sliders y textos indicativos
  text(s, 20, windowHeight - 40, 100, 20);
  sliderbrush = createSlider(5, 100, 0);
  sliderbrush.position(20, windowHeight - 30);

  text(d, 160, windowHeight - 40, 100, 20);
  slidereraser = createSlider(10, 100, 0);
  slidereraser.position(160, windowHeight - 30);

  text(f, 300, windowHeight - 40, 150, 20);
  sliderb1 = createSlider(10, windowWidth, 0);
  sliderb1.position(300, windowHeight - 30);

  text(r, 530, posyb, 50, 50);
  sliderR = createSlider(0, 255, 0);
  sliderR.position(390, posyb);

  text(g, 530, posyb + 20, 50, 50);
  sliderG = createSlider(0, 255, 0);
  sliderG.position(390, posyb + 20);

  text(b, 530, posyb + 40, 50, 50);
  sliderB = createSlider(0, 255, 0);
  sliderB.position(390, posyb + 40);
}


function draw() {
  
  //Preguntar si el mouse está presionado, hacer accion:
  if (mouseIsPressed == true) {

    //Herramienta 1, pincel básico, cambian sus colores con los sliders rgb.
    if (tool == 1) {
      noStroke();
      fill(sliderR.value(), sliderG.value(), sliderB.value());
      ellipse(mouseX + 10, mouseY, sliderbrush.value(), sliderbrush.value());
      //Herramienta 2, crea un degradé básico con tonalidades grises. 
    } else if (tool == 2) {
      noStroke();
      fill(degrade, degrade, degrade);
      rect(mouseX, mouseY, windowWidth / 4, windowHeight / 4);
      degrade -= 1;
      
      //Herramienta 3, cambia el color del background aleatoriamente con la funcion random.
    } else if (tool == 3) {
      noStroke();
      bgcolor = color(random(255), random(255), random(255));
      fill(bgcolor);
      rect(0, 0, windowWidth, windowHeight);
      
      //Herramienta 4, es un borrador con tamaño ajustable. 
    } else if (tool == 4) {
      noStroke();
      fill(bgcolor);
      ellipse(mouseX, mouseY, slidereraser.value(), slidereraser.value());

      //Herramienta 5, crea un trazado que sigue los colores del arcoiris, luego de llegar a valores mayores de 360,se resetea
      //cuando alcanza valores mayores a 360, cambia la escala de color
    } else if (tool == 5) {

      if (hue > 360) {
        hue = 0;
      } else {
        hue++;
      }
      colorMode(HSL, 360);
      noStroke();
      fill(hue, 200, 200);
      ellipse(mouseX, mouseY, 50, 50);
      
      //Herramienta 6, guarda el canvas
    } else if (tool == 6) {

      saveCanvas(myCanvas, '.jpg');
      
      //Herramienta 7, crea una sucesion de lineas con coordenadas iniciales
      //ajustables con el slider 3. 
    } else if (tool == 7) {

      //line(windowWidth/2,windowHeight/2,pmouseX,pmouseY);
      stroke(sliderR.value(), sliderG.value(), sliderB.value());
      line(sliderb1.value(), sliderb1.value(), mouseX, mouseY);
      
      //Herramienta 8, pincel de circulos, cambia de color
    } else if (tool == 8) {
      noStroke();
      fill(sliderR.value(), sliderG.value(), sliderB.value());
      ellipse(mouseX, mouseY, 6, 6);
      ellipse(mouseX - 4, mouseY - 4, 3, 3);
      ellipse(mouseX + 7, mouseY + 5, 1, 1);
      ellipse(mouseX + 3, mouseY - 6, 1.2, 1.2);
      
      //herramienta 9, pincel de lineas

    } else if (tool == 9) {
      stroke(sliderR.value(), sliderG.value(), sliderB.value());
      line(mouseX, mouseY, mouseX + 10, mouseY - 8);
      line(mouseX, mouseY, mouseX + 13, mouseY - 5);


    }

//Area sensible de los botones
    if ((mouseX > posb1 && mouseX < posb1 + tamb && mouseY > posyb && mouseY < posyb + tamb)) {
      //background(100);
      tool = 1;

    }

    if ((mouseX > posb2 && mouseX < posb2 + tamb && mouseY > posyb && mouseY < posyb + tamb)) {
      //background(100);
      tool = 2;

    }

    if (mouseX > posb3 && mouseX < posb3 + tamb && mouseY > posyb && mouseY < posyb + tamb) {

      tool = 3;
    }

    if (mouseX > posb4 && mouseX < posb4 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 4;

    }

    if (mouseX > posb5 && mouseX < posb5 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 5;

    }

    if (mouseX > posb6 && mouseX < posb6 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      tool = 6;

    }

    if (mouseX > posb7 && mouseX < posb7 + tamb && mouseY > posyb && mouseY < posyb + tamb) {
      //background(100);
      print("si");
      tool = 7;

    }

    if (mouseX > posb8 && mouseX < posb8 + tamb && mouseY > posyb && mouseY < posyb + tamb) {

      tool = 8;

    }

    if (mouseX > posb9 && mouseX < posb9 + tamb && mouseY > posyb && mouseY < posyb + tamb) {

      tool = 9;

    }

  }



}