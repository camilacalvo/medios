//Variable para movimiento de agua con ruido de perlin
let yoff = 0.0;
// Variable para el color del cielo
var colorcielo = 255;
//Array con objetos tipo Fish
var fish = [];
//Array con la posición en x del worm 
let xw = [];
//Array con la posición y del worm 
let yw = [];

function setup() {
  createCanvas(960, 480);
  //Crear 19 elementos de tipo Fish()
  for (var i = 0; i < 20; i++) {
    fish[i] = new Fish();
  }
  //Mantener atributos de xw y yw
  for (var j = 0; j < 30; j++) {
    xw.push(j * 10);
    yw.push(300);
  }
}

function draw() {
  //Dibuja el color del fondo 
  fill(colorcielo - 150, colorcielo - 31, colorcielo);
  rect(0, 0, width, height);
  //Llama a la función drawWave y le da sus parametros de alto, bajo y el offset de x.
  drawWave(height * 0.35, height * 0.3, 0.2);
  //Cambia el color de las siguientes dos olas 
  fill(22, 100, 185, 100); // azul claro
  drawWave(height * 0.45, height * 0.4, 0.4);
  drawWave(height * 0.55, height * 0.5, 0.6);
  //Cambia el color de las siguientes dos olas 
  fill(40, 40, 162, 100); // azul medio
  drawWave(height * 0.65, height * 0.6, 0.8);
  drawWave(height * 0.75, height * 0.7, 0.10);
  //Cambia el color
  fill(40, 40, 100, 50); // areas mas oscuras que indican el fondo del oceano 
  noStroke();
  drawWave(height * 0.85, height * 0.80, 0.10);
  fill(30, 30, 80, 50);
  drawWave(height * 0.9, height * 0.85, 0.10);
  //Hace que visualicemos los peces llamando la funcion display de la clase fish, y hace que se muevan con la funcion drive.
  for (var i = 0; i < fish.length; i++) {
    fish[i].display();
    fish[i].drive();
  }
  //Creación de plantas con los parametros (Posiciónx, posy, ancho)
  plants(40, 19, 10);
  plants(470, 13, 30);
  plants(100, 8, 20);
  plants(410, 10, 30);
  plants(300, 5, 40);
  plants(150, 13, 10);
  plants(550, 13, 10);
  plants(600, -20, 20);
  plants(700, -0, 25);
  plants(750, 13, 25);
  plants(850, 13, 5);
  plants(900, 13, 10);
  //Dibujar el tiburón. 
  shark();
  //Dibujar los gusanos. 
  for (var j = 0; j < xw.length; j++) {
    let xo = cos(frameCount * 0.01 + j * 0.05) * 20;
    let yo = cos(frameCount * 0.1 + j * 0.3) * 15;
    xo = xo + 1;
    ellipse(xw[i] + xo, yw[i] + yo, 5);
    ellipse((xw[i] + xo) + 700, yw[i] + yo, 5);
  }
  //Creación de la estrella trasladando su posición.
  noStroke();
  fill(255);
  translate((width / 2) + 200, (height / 2) + 100);
  estrella();
  //Se traslada la posición de nuevo para crear otra estrella, teniendo en cuenta que el centro ahora es (width / 2) + 200, (height / 2) + 100
  translate(-600, 100);
  estrella();
}

function drawWave(arriba, abajo, xoff) {
  //dibujo de poligono
  beginShape();
  // Se itera sobre los pixeles horizontales
  for (let x = 0; x <= width; x += 10) {
    // Se calcula un valor de y de acuerdo al ruido de perlín, y se mapea. 
    let y = map(noise(xoff, yoff), 0, 1, arriba, abajo);
    // Se establece el vertice
    vertex(x, y);
    // Se incrementa en la dirección x para el ruido. 
    xoff += 0.05;
  }
  // Se incrementa la dirección y con el ruido. 
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  //final de la figura. 
  endShape(CLOSE);
}

//Función que establece la creación de los peces
function Fish() {
  //Variables internas de los peces, posicion x, y, velocidad y color. 
  noStroke();
  this.xpos = random(0, width);
  this.ypos = random(200, height);
  this.speed = random(2);
  this.c = color(random(250), random(200), random(200), 250);
  // función para el movimiento
  this.drive = function() {
    if (this.xpos >= width) {
      this.xpos = -100; //se arranca por fuera de la pantalla.  
      this.ypos = random(100, height);
    }
    this.xpos = this.xpos + this.speed; //setear velocidad.
    if (this.xpos > -10 && this.xpos < 200) {
      this.ypos++;
    }
    if (this.xpos > 200 && this.xpos < 400) {
      this.ypos--;
    }
    if (this.xpos > 400 && this.xpos < 600) {
      this.ypos++;
    }
  };
  // Pintar en pantalla, función display.
  this.display = function() {
    // Cuerpo del pez
    fill(this.c);
    ellipse(this.xpos - 15, this.ypos - 4, 5, 8);
    ellipse(this.xpos - 15, this.ypos + 4, 5, 8);
    ellipse(this.xpos, this.ypos, 30, 15);
    // Ojos del pez
    fill(255, 100);
    ellipse(this.xpos + 9, this.ypos - 3, 8, 8);
    fill(50, 100);
    ellipse(this.xpos + 10, this.ypos - 3, 3, 5);
  }
}
 //función que crea las algas, debe tener tres inputs(posicion en x, posicion en y, ancho)
function plants(plantx, planty, plantw)
{
  fill(100, 200, 0, 60);
  ellipse(plantx, planty + 400, plantw - 5, 55);
  ellipse(plantx, planty + 420, plantw, 55);
  ellipse(plantx + 5, planty + 450, plantw, 45);
  ellipse(plantx, planty + 480, plantw - 5, 55);
}

//Función que dibuja el tiburón
function shark() {
//Coordenadas x,y
  let x = 350;
  let y = 300;
//Atributos físicos. 
  smooth();
  fill(0);
  beginShape();
  curveVertex(x + 190, y + 240); // Primer punto de control 
  curveVertex(x + 190, y + 240); // punto de inicio de la curva
  // Dibujar el cuerpo
  curveVertex(x + 130, y + 170);
  curveVertex(x + 120, y + 130);
  // aleta izquierda
  curveVertex(x + 80, y + 150);
  curveVertex(x + 90, y + 125);
  curveVertex(x + 120, y + 95);
  // cabeza
  curveVertex(x + 122, y + 55);
  curveVertex(x + 140, y + 20);
  curveVertex(x + 160, y + 20);
  curveVertex(x + 172, y + 55);

  // aleta derecha
  curveVertex(x + 176, y + 98);
  curveVertex(x + 220, y + 129);
  curveVertex(x + 174, y + 125);

  // cuerpo
  curveVertex(x + 175, y + 170);
  curveVertex(x + 200, y + 227);

  // cola
  curveVertex(x + 230, y + 226);
  curveVertex(x + 250, y + 215);
  curveVertex(x + 230, y + 238);
  curveVertex(x + 210, y + 250);
  curveVertex(x + 215, y + 280);
  curveVertex(x + 195, y + 265);
  curveVertex(x + 190, y + 240);

  curveVertex(x + 190, y + 240); // last control point
  endShape();
}

//Función que dibuja la estrella rara 

function estrella() {
  
  //Poner que el centro del rectángulo sea en el centro 
  noStroke();
  rectMode(CENTER);
  //Crear rectángulos rotados
  for (var i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI * i / 8);
    var tx = 50 * noise(0.01 * frameCount);
    translate(tx, 0);
    rect(0, 0, 10, 10);
    for (var j = 0; j < 6; j++) {
      push();
      rotate(TWO_PI * j / 6);
      var rx = 20 * noise(0.01 * frameCount + 10);
      rect(rx, 0, 4, 4);
      pop();
    }
    translate()
    pop();
  }
}
