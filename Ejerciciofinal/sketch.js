//Variable para almacenar la fuente Montserrat
let fuente;
//Variable que carga el modelo 3d de la tierra
let tierra1;
//Display año en pantalla
let year;
let rotacion;
let rotaciony;
//Valor numérico del año
let numaño;
let valoraño = 0;

//Mesh negro 

let negro;

//botones paises
let colombiabt;
let brasilbt;
let chinabt;
let indiabt;
let mexbt;
let usabt;
let rusiabt;

//texturas del mundo
let mesh1;
let mesh2;
let mesh3;
let mesh4;
let mesh5;
let meshxchange;

//Hojas de datos
let gentedata;
let dioxidodata;

//Contador para agitar
let texturavariar;
let contadorShaken = 0;

//Iconos de la guarderia y fabrica
let guarderia;
let fabrica;
let aruba;
//Graficos 2D
let dosguarderia;
let dosfabrica;

//Variables de años
let uno;
let dos;

function preload() {
  //Cargar las imágenes de los botones
  tierra1 = loadModel('tierrasana.obj', true);
  colombiabt = loadImage('colombia.png');
  brasilbt = loadImage('brasil.png');
  chinabt = loadImage('china.png');
  indiabt = loadImage('india.png');
  mexbt = loadImage('mexico.png');
  usabt = loadImage('usa.png');
  rusiabt = loadImage('rusia.png');
  //Planeta SÚPER SALUDABLE
  mesh1 = loadImage('m3sh2.png');
  //Planeta más opaco
  mesh2 = loadImage('mesh1.png');
  //Planeta jodido
  mesh3 = loadImage('degrade3.png');
  //Planeta medio jodido 
  mesh4 = loadImage('mesh2.png');
  //Planeta re jodido 
  mesh5 = loadImage('mesh4.png');
  //Cargar la fuente montserrat
  negrilla = loadFont('Montserratbolditalic.otf');
  //Cargar hojas de datos
  gentedata = loadTable('poblacion.csv', 'csv', 'header');
  dioxidodata = loadTable('CO2.csv', 'csv', 'header');
  //Cargar iconos 
  guarderia = loadImage('guarderia.png');
  fabrica = loadImage('camionfabrica.png');
  aruba = loadImage('aruba.png');
  //Cargar color negro como mesh 
  negro = loadImage('negro.jpg');
}

function ValoresColumnasP(tab, colName) {
  let vals = gentedata.getColumn(colName);
  let obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function ValoresColumnasD(tab, colName) {
  let vals = dioxidodata.getColumn(colName);
  let obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function setup() {
  //WEBGL permite que el canvas cargue objetos .OBJ
  createCanvas(windowWidth, windowHeight, WEBGL);
  // numero de filas de la hoja de datos de poblacion
  console.log(gentedata.getRowCount());
  // numero de columnas de la hoja de datos de poblacion
  console.log(gentedata.columns);
   // numero de filas de la hoja de datos de dioxido
  console.log(dioxidodata.getRowCount());
  // numero de columnas de la hoja de datos de CO2
  console.log(dioxidodata.columns);
  //Crear gráficos en 2D
  year = createGraphics(200, 300);
  //Parametros del texto en year
  year.fill(250);
  year.textFont(negrilla);
  year.textSize(30);
  year.text('AÑO:', 0, 150);
  //Crear gráficos en 2d para la rotacion
  rotacion = createGraphics(200, 80);
  rotacion.textSize(8);
  rotaciony = createGraphics(200, 80);
  rotaciony.textSize(10);
  numaño = createGraphics(200, 300);
  numaño.fill(255);
  numaño.textFont(negrilla);
  numaño.textSize(30);
  //Graficos 2D para los iconos de los datos
  dosguarderia = createGraphics(55,46);
  dosguarderia.image(guarderia,0,0);
  // Sacar valores y minimo y máximo de 1960
  uno = ValoresColumnasP(gentedata, "1960");
  console.log(uno.min);
  console.log(uno.max);
  //lista de valores por paises en 1960 población -- guía
  print("Brasil:" + uno.values[27]);
  print("Colombia:" + uno.values[43]);
  print("China:" + uno.values[38]);
  print("Mexico:" + uno.values[152]);
  print("Rusia:" + uno.values[200]);
  print("India:" + uno.values[107]);
  print("USA:" + uno.values[249]);
  //Sacar valores de 1960 de CO2
  dos = ValoresColumnasD(dioxidodata, "1960");
  //Lista de valores CO2 en 1960 -- guía 
  print("BrasilCO2:" + dos.values[27]);
  print("ColombiaCO2:" + dos.values[43]);
  print("ChinaCO2:" + dos.values[38]);
  print("MexicoC02:" + dos.values[152]);
  print("RusiaC02:" + dos.values[200]);
  print("IndiaC02:" + dos.values[107]);
  print("USAC02:" + dos.values[249]);
}


function draw() {
  background(240);
  //Dibuja lower half más grid 
  push();
  translate(0,200);
  fill(180);
  plane(windowWidth,windowHeight/2);
  pop(); 
   
  //Imprime la palabra año en el canvas
  fill(255);
  noStroke();
  push();
  translate(-320, 120);
  texture(year);
  plane(200, 300);
  pop();
  //Imprime la rotación en x en el canvas
  /*push();
  rotacion.background(180);
  rotacion.text("X: " + floor(rotationX), 0, 40);
  translate(-100, 200);
  texture(rotacion);
  plane(200, 80);
  pop();
  push();
  rotaciony.background(180);
  rotaciony.text("Y: " + floor(rotationY), 0, 40);
  translate(40, 220);
  texture(rotaciony);
  plane(200, 80);
  pop();*/
  //Imprime el año que es, de acuerdo a la rotación
  if (rotationX >= -90 && rotationX <= -70) {
    valoraño = 1960;
  } else if (rotationX > -70 && rotationX <= -50) {
    valoraño = 1970;
  } else if (rotationX > -50 && rotationX <= -30) {
    valoraño = 1980;
  } else if (rotationX > -30 && rotationX <= -10) {
    valoraño = 1990;
  } else if (rotationX > -10 && rotationX <= 10) {
    valoraño = 2000;
  } else if (rotationX > 10 && rotationX <= 30) {
    valoraño = 2010;
  } else if (rotationX > 30 && rotationX <= 50) {
    valoraño = 2012;
  } else if (rotationX > 50 && rotationX <= 70) {
    valoraño = 2014;
  } else if (rotationX > 70 && rotationX <= 90) {
    valoraño = 2016;
  } else if (rotationX > 90) {
    valoraño = 2018;
  }
  push();
  numaño.background(180);
  translate(-260, 200);
  numaño.text(valoraño, 0, 70);
  texture(numaño);
  plane(150, 300);
  pop();
  //Condicional para las banderas de los paises
  if (contadorShaken == 0) {
    texturavariar = brasilbt;
  } else if (contadorShaken == 1) {
    texturavariar = colombiabt;
  } else if (contadorShaken == 2) {
    texturavariar = mexbt;
  } else if (contadorShaken == 3) {
    texturavariar = chinabt;
  } else if (contadorShaken == 4) {
    texturavariar = usabt;
  } else if (contadorShaken == 5) {
    texturavariar = rusiabt;
  } else if (contadorShaken == 6) {
    texturavariar = indiabt;
  }
  //Dibuja el ícono de las banderas
  push();
  translate(windowWidth - 1350, windowHeight - 590);
  scale(1.2);
  texture(texturavariar);
  plane(53, 53);
  pop();
  //Cambiar la textura del planeta según el año 
  if (valoraño == 1960) {
    meshxchange = mesh1;
  }
  if (valoraño == 1970) {
    meshxchange = mesh2;
  }
  if (valoraño == 1980) {
    meshxchange = mesh1;
  }
  if (valoraño == 1990) {
    meshxchange = mesh2;
  }
  if (valoraño == 2000) {
    meshxchange = mesh4;
  }
  if (valoraño == 2010) {
    meshxchange = mesh3;
  }
  if (valoraño == 2012) {
    meshxchange = mesh5;
  }
  if (valoraño == 2014) {
    mesxchange = mesh5;
  }
  //Inicia nuevo estado de dibujo para dibujar el mundo
  push();
  rotateX(frameCount * 0.01);
  stroke(10);
  scale(2.5);
  texture(meshxchange);
  model(tierra1);
  pop();
  //prueba dibujo 
  if (contadorShaken == 0 && valoraño == 1960){
    //dibujar fabrica 
  push();
  translate(440,250);
  texture(fabrica);
  plane(53,43);
  pop(); 
    for (var i = 0; i<= 20; i= i+1){
  push();
  translate(-440+(i*40),-250);
  texture(aruba);
  plane(53,53);
  pop();   
    } 
}
  //-------------
    if (contadorShaken == 0 && valoraño == 1970){
  for (var j = 0; j<= 20; j= j+1){
  push();
  translate(-440+(j*40),-250);
  texture(aruba);
  plane(53,53);
  pop();
    push();
  translate(-440+(j*40),-200);
  texture(aruba);
  plane(53,53);
  pop();
  }
    }
  if (contadorShaken == 0 && valoraño == 1980){
  for (var k = 0; k<= 20; k= k+1){
  push();
  translate(-440+(k*40),-250);
  texture(aruba);
  plane(53,53);
  pop();
  }
  for (var l = 0; l <= 10; l = l+1){
  push();
  translate(-440+(l*40),-200);
  texture(aruba);
  plane(53,53);
  pop();
  }
  }
}

function deviceShaken() {
  contadorShaken = contadorShaken + 1;
  if (contadorShaken >= 7) {
    contadorShaken = 0;
  }
}