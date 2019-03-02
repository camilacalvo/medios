//Lista de posiciones de los snakes
var x = 200;
var y = 200;
var x2 = 200;
var y2 = 400;
var xE = 0;
var yE = 0;
// Variables para insertar la manzana
var manzana;
var tamApple;
//variables de movimiento
var arriba = false;
var abajo = false;
var izquierda = false;
var derecha = false;
var arriba2 = false;
var abajo2 = false;
var izquierda2 = false;
var derecha2 = false;
var posicion;
//contadores
var contadorV = 0;
var contadorR = 0;
//triangulos de contadores 
var t1cv = 0;
var t2cv = 0;

function setup() {
  createCanvas(600, 600);
  //iniciar la manzana en una posicion aleatoria
  xE = random(0, width);
  yE = random(60, height);
  //insertar imagen de manzana
  manzana = createImg('manzana-10.png');
  //posicion manzana
  posicion = manzana.position(xE, yE, tamApple, tamApple);

}

function draw() {
  background(255);
  fill(0);

  //cuadrados snake
  noStroke();
  rect(0, 0, width, 60);
  stroke(255, 0, 0);
  rect(x, y, 10, 10);
  stroke(0, 255, 0);
  rect(x2, y2, 10, 10);
  //texto vs
  noStroke();
  fill(255);
  textSize(20);
  text('vs', 290, 40);
  //contadores triangulares (r,g,b,transparencia)
  fill(255, 0, 0, contadorR + 100);
  triangle(t1cv + 260, t1cv + 50, t1cv + 100, t1cv + 50, t1cv + 100, t1cv + 10);
  fill(0, 255, 0, contadorV + 100);
  triangle(t2cv + 340, t2cv + 50, t2cv + 500, t2cv + 50, t2cv + 500, t2cv + 10);

  //mirar si se comió la manzana y avanzar los contadores
  if (dist(x, y, xE, yE) < 40) {
    xE = random(0, width);
    yE = random(60, height);
    contadorR += 20;
    contadorV -= 0.5;
    // print('true');
  }
  if (dist(x2, y2, xE, yE) < 40) {
    xE = random(0, width);
    yE = random(60, height);
    contadorV += 20;
    contadorR -= 0.5;
    print(contadorV);

  }

  //actualizar posición manzana luego de comerla
  posicion = manzana.position(xE, yE, tamApple, tamApple);

  //avance de los snakes

  if (derecha == true) {
    x = x + 5;
  }
  if (izquierda == true) {
    x = x - 5;
  }
  if (arriba == true) {
    y = y - 5;
  }
  if (abajo == true) {
    y = y + 5;
  }

  if (derecha2 == true) {
    x2 = x2 + 5;
  }
  if (izquierda2 == true) {
    x2 = x2 - 5;
  }
  if (arriba2 == true) {
    y2 = y2 - 5;
  }
  if (abajo2 == true) {
    y2 = y2 + 5;
  }

  if (y <= 60 || y2 <= 60) {
    y = 61;
    y2 = 61;
  }

  //limites del canvas 

  if (x > 600) {
    x = -50;
  }
  if (x2 > 600) {
    x2 = -50;

  }
  if (y > 600) {
    y = -50;
  }

  if (y2 > 600) {
    y2 = -50;
  }

  if (x < -50) {

    x = 600;
  }

  if (x2 < -50) {
    x = 600;
  }

  if (y < -50) {

    y = 600;
  }

  if (y2 < -50) {
    y2 = 600;
  }

}

// funcion teclas, verificar direccion 
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    derecha = true;
  } else {
    derecha = false;
  }

  if (keyCode === LEFT_ARROW) {
    izquierda = true;

  } else {
    izquierda = false;
  }

  if (keyCode === UP_ARROW) {
    arriba = true;
  } else {
    arriba = false;
  }


  if (keyCode === DOWN_ARROW) {

    abajo = true;
  } else {
    abajo = false;
  }


}

// snake dos verificar direccion 

function keyTyped() {
  if (key === 'd') {
    derecha2 = true;
  } else {
    derecha2 = false;
  }

  if (key === 'a') {
    izquierda2 = true;

  } else {
    izquierda2 = false;
  }

  if (key === 'w') {
    arriba2 = true;
  } else {
    arriba2 = false;
  }


  if (key === 's') {

    abajo2 = true;
  } else {
    abajo2 = false;
  }

}