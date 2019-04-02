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
//Variable con el tiburón
var willy;
//Variable con el pescador 
var pescador;
//Variable estrellas
var patricio = [];


function setup() {
  createCanvas(960, 480);
  //Crear 19 elementos de tipo Fish()
  for (var i = 0; i < 20; i++) {
    fish[i] = new Fish();
  }
  //Mantener atributos de xw y yw del gusano 
  for (var j = 0; j < 30; j++) {
    xw.push(j * 10);
    yw.push(300);
  }
  willy = new shark();
  pescador = new humano();
  for (var k = 0; k < 4; k++) {
    patricio[k] = new estrella(random(0, width), random(200, height));
  }
}

function draw() {
  //Dibuja el color del fondo
  background(colorcielo - 150, colorcielo - 31, colorcielo);
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
    fish[i].checkgame();
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
  //Dibujar el pescador
  pescador.display();
  //Dibujar el tiburón.
  if (willy.resize == 0){
  willy.display();
  willy.movement();
  }
  //Reescalar el tiburon cuando se choca con las estrellas
  if (willy.resize == 1){
    push();
    scale(0.5);
    translate(690,360);
    willy.display();
    willy.movement();
    pop();
  }
  //Dibujar los gusanos. 
  fill(0);
  for (var j = 0; j < xw.length; j++) {
    let xo = cos(frameCount * 0.01 + j * 0.05) * 20;
    let yo = cos(frameCount * 0.1 + j * 0.3) * 15;
    xo = xo + 10;
    ellipse(xw[i] + xo, yw[i] + yo, 5);
    ellipse((xw[i] + xo) + 700, yw[i] + yo, 5);

  }
  
  //dibuja las estrellas
  for (var k = 0; k < 3; k++) {
    patricio[k].display();
  }
  //Interacción entre el tiburón y las estrellas 
  for (var s = 0; s < 4; s++) {
    if (dist(willy.x + 690, willy.y+360, patricio[s].x, patricio[s].y) < 40) {
      willy.resize = 1;
    }
  }

  //Interaccion entre el tiburon y los peces
  for(var c = 0; c < fish.length; c++){
   if(dist(willy.x + 690, willy.y + 360, fish[c].xpos, fish[c].ypos) < 40){
   fish[c].muere = 1;
   } 
  }

  //interacción entre gusanos y peces
  for(var f = 0; f < fish.length; f++){
  if(dist(fish[f].xpos,fish[f].ypos,180,280) < 10 || dist(fish[f].xpos,fish[f].ypos,240,320) <10 || dist(fish[f].xpos,fish[f].ypos,880,280) < 10 || dist(fish[f].xpos,fish[f].ypos,940,320) <10  )  {
    fish[f].display();
  }
}
}

//Funcion que dibuja las olas y hace que se muevan 
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
  this.xpos = random(-10, width);
  this.ypos = random(200, height);
  this.speed = random(2);
  this.c = color(random(250), random(200), random(200), 250);
  this.estado = 0;
  this.muere = 0;
  // función para el movimiento
  this.drive = function() {
    if (this.xpos > mouseX + 200 && this.estado == 0) {
      this.xpos = this.xpos + random(0, 1) + this.speed;
    }
    if (this.xpos < mouseX + 200 && this.estado == 0) {
      this.xpos = this.xpos + random(-1, 0) + this.speed;
    }
    if (this.ypos > mouseY + 100 && this.estado == 0) {
      this.ypos = this.ypos + random(0, 1) + this.speed;
    }
    if (this.ypos < mouseY + 100) {
      this.ypos = this.ypos + random(-1, 0) + this.speed;
    }
    if (this.xpos > width && this.estado == 0 || this.xpos < 0 && this.estado == 0) {
      this.xpos = random(0, width);
      //this.xpos++;
    }
    if (this.ypos > height && this.estado == 0 || this.ypos < 0 && this.estado == 0) {
      this.ypos = random(0, height);
    }

  }
  
  // Pintar en pantalla, función display.
  this.display = function() {
    
    if(this.muere == 0){
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
    else if (this.muere == 1){
      
    }
  }
  this.checkgame = function() {
    if (dist(this.xpos, this.ypos, mouseX + 200, mouseY + 100) < 10) {

      this.estado = 1;
      this.xpos = -width;
    }
  }
}
//función que crea las algas, debe tener tres inputs(posicion en x, posicion en y, ancho)
function plants(plantx, planty, plantw) {
  fill(100, 200, 0, 60);
  ellipse(plantx, planty + 400, plantw - 5, 55);
  ellipse(plantx, planty + 420, plantw, 55);
  ellipse(plantx + 5, planty + 450, plantw, 45);
  ellipse(plantx, planty + 480, plantw - 5, 55);
}

//Función que dibuja el tiburón
function shark() {
  //Coordenadas x,y
  this.x = 0;
  this.y = 0;
  this.angulo = 0.0;
  this.escalar = 40;
  this.desplazamiento = 30;
  this.speed = 0.05;
  this.resize = 0;

  //Atributos físicos.
  this.display = function() {
    smooth();
    fill(0);
    fill(49, 58, 102);
    //cuerpo
    beginShape();
    vertex(this.x + 690, this.y + 360);
    vertex(this.x + 737, this.y + 407);
    vertex(this.x + 784, this.y + 410);
    vertex(this.x + 812, this.y + 410);
    vertex(this.x + 880, this.y + 399);
    vertex(this.x + 816, this.y + 368);
    vertex(this.x + 761, this.y + 366);
    vertex(this.x + 690, this.y + 360);
    endShape();
    //cola 
    triangle(this.x + 857, this.y + 388, this.x + 880, this.y + 399, this.x + 918, this.y + 359);
    beginShape();
    vertex(this.x + 870, this.y + 401);
    vertex(this.x + 870, this.y + 402);
    vertex(this.x + 904, this.y + 415);
    vertex(this.x + 905, this.y + 414);
    vertex(this.x + 881, this.y + 391);
    endShape(CLOSE);
    //profundidad
    fill(30, 37, 61);
    beginShape();
    vertex(this.x + 690, this.y + 360);
    vertex(this.x + 695, this.y + 357);
    vertex(this.x + 819, this.y + 364);
    vertex(this.x + 861, this.y + 386);
    vertex(this.x + 857, this.y + 388);
    vertex(this.x + 816, this.y + 368);
    vertex(this.x + 761, this.y + 366);
    vertex(this.x + 690, this.y + 360);
    endShape();
    //Aleta superior
    fill(49, 58, 102);
    quad(this.x + 773, this.y + 361, this.x + 824, this.y + 316, this.x + 822, this.y + 363, this.x + 820, this.y + 365);
    //ojo
    fill(0);
    ellipse(this.x + 723, this.y + 370, 2.28, 4.8);
  }
  this.movement = function() {
    this.x = this.x - 1;
    this.y = this.desplazamiento + sin(this.angulo) * this.escalar;
    this.angulo += this.speed;
    if (this.x < -width-200) {
      this.x = 500;
    }



  }
  
}
//Función que dibuja la estrella rara 

function estrella(_x, _y) {
  //Coordenadas x,y
  this.x = _x;
  this.y = _y;

  this.display = function() {
    //Empezar un nuevo estado de dibujo
    push();
    //Establecer posición en el canvas
    translate(this.x, this.y);
    //Poner que el centro del rectángulo sea en el centro 
    noStroke();
    rectMode(CENTER);
    //Crear rectángulos rotados
    for (var i = 0; i < 8; i++) {
      push();
      rotate(TWO_PI * i / 8);
      var tx = 50 * noise(0.01 * frameCount);
      translate(tx, 0);
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
    //eliminar estado de dibujo (o resetearlo)
    pop();
  }

}

//Mano del pescador
function humano() {
//Funcion que pinta el pescador en la pantalla
  this.display = function() {
    rectMode(CORNER);
    noStroke();

    fill(0, 0, 50);
    rect(mouseX, mouseY, 200, 3);
    ellipse(mouseX, mouseY, 70, 20);
    ellipse(mouseX + 200, mouseY + 100, 5, 20);
    rect(mouseX + 200, mouseY, 1, 100);
    fill(230, 200, 100);
    rect(mouseX - width, mouseY - 20, width, 20);
    ellipse(mouseX, mouseY, 30, 40);

  }

}
