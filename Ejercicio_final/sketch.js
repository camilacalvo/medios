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

//Mesh palabras 
let hola;
let tocap;
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
//let guarderia;
let fabrica;
let aruba;
//Graficos 2D
let dosguarderia;
let dosfabrica;

//Variables de años gente
let uno;
let dos;
let tres;
let cuatro;
let cinco;
let seis;
let siete;
let ocho;
let nueve;

//Variables de años CO2

let COuno;
let COdos;
let COtres;
let COcuatro;
let COcinco;
let COseis;
let COsiete;
let COocho;
let COnueve;

//Contador de estados
var estado = 0;
let intro;
let insttxt;
let inst;
let conven;

//Camara
let capture;

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
  //guarderia = loadImage('guarderia.png');
  fabrica = loadImage('fab.png');
  aruba = loadImage('costarica.png');
  //Cargar color negro como mesh 
  negro = loadImage('negro.jpg');
  intro = loadImage('intro.png');
  insttxt = loadImage('inst-03.png');
  inst = loadImage('inst.png');
  conven = loadImage('conv.png');
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
  //year.fill(250);
  year.textFont(negrilla);
  year.textSize(30);
  year.text('AÑO:', 0, 150);
  
  //Texto última pantalla
  
  hola = createGraphics(781,77);
  hola.textFont(negrilla);
  hola.textSize(68);
  hola.text('ONE YOU IS ENOUGH', 0, 77);
  
  tocap = createGraphics(589,34);
  tocap.textFont(negrilla);
  tocap.textSize(28);
  tocap.text('Ayuda al planeta, NO TENGAS HIJOS!',0,34);
  //Crear gráficos en 2d para la rotacion
  rotacion = createGraphics(200, 80);
  rotacion.textSize(8);
  rotaciony = createGraphics(200, 80);
  rotaciony.textSize(10);
  numaño = createGraphics(70, 40);
  numaño.fill(255);
  numaño.textFont(negrilla);
  numaño.textSize(26);

  // Sacar valores y minimo y máximo de 1960
  uno = ValoresColumnasP(gentedata, "1960");
  console.log(uno.min);
  console.log(uno.max);
  //lista de valores por paises en 1960 población -- guía
  print("Brasil27:" + uno.values[27]);
  print("Colombia43:" + uno.values[43]);
  print("China38:" + uno.values[38]);
  print("Mexico152:" + uno.values[152]);
  print("Rusia200:" + uno.values[200]);
  print("India107:" + uno.values[107]);
  print("USA249:" + uno.values[249]);
  dos = ValoresColumnasP(gentedata, "1970");
  //Valores gente 
  tres = ValoresColumnasP(gentedata, "1980");
  cuatro = ValoresColumnasP(gentedata, "1990");
  cinco = ValoresColumnasP(gentedata, "2000");
  seis = ValoresColumnasP(gentedata, "2010");
  siete = ValoresColumnasP(gentedata, "2012");
  ocho = ValoresColumnasP(gentedata, "2014");
  nueve = ValoresColumnasP(gentedata, "2016");

  //Valores dioxido

  COuno = ValoresColumnasD(dioxidodata, "1960");
  COdos = ValoresColumnasD(dioxidodata, "1970");
  COtres = ValoresColumnasD(dioxidodata, "1980");
  COcuatro = ValoresColumnasD(dioxidodata, "1990");
  COcinco = ValoresColumnasD(dioxidodata, "2000");
  COseis = ValoresColumnasD(dioxidodata, "2010");
  COsiete = ValoresColumnasD(dioxidodata, "2012");
  COocho = ValoresColumnasD(dioxidodata, "2014");
  COnueve = ValoresColumnasD(dioxidodata, "2016");
  //Lista de valores CO2 en 1960 -- guía 
  print("BrasilCO2:" + COdos.values[0]);
  print("ColombiaCO2:" + COuno.values[2]);
  print("ChinaCO2:" + COuno.values[1]);
  print("MexicoC02:" + COuno.values[3]);
  print("RusiaC02:" + COuno.values[4]);
  print("IndiaC02:" + COuno.values[6]);
  print("USAC02:" + COuno.values[5]);
  print("hola" + ceil((COtres.values[0]) / 50000));
  
  capture = createCapture(VIDEO);
  capture.size(300,200);
  capture.hide();
}


function draw() {
  background(240);

  if (estado == 0) {
    push();
    texture(inst);
    plane(windowWidth, windowHeight);
    pop();
    push();
    scale(0.3);
    rotateY(frameCount * 0.01);
    translate(0, -620, 100);
    fill(180);
    texture(insttxt);
    plane(796, 173);
    pop();
  }
  if (estado == 1) {
    texture(intro);
    plane(windowWidth, windowHeight);

  }
  if (estado == 2) {
    texture(conven);
    plane(windowWidth, windowHeight);

  }
  if (estado == 3) {
    //Dibuja lower half más grid 
    push();
    translate(0, 200);
    fill(180);
    plane(windowWidth, windowHeight / 2);
    pop();
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
    usaDioxido();
    //Imprime la palabra año en el canvas
    fill(255);
    numaño.fill(random(255), random(255), random(255));
    noStroke();
    push();
    translate(-320, 120);
    texture(year);
    plane(200, 300);
    pop();
    push();
    numaño.background(180);
    translate(-290, 110);
    numaño.text(valoraño, 0, 33);
    texture(numaño);
    plane(70, 40);
    pop();
    //Condicional para las banderas de los paises
    if (contadorShaken == 0) {
      texturavariar = brasilbt;
    } else if (contadorShaken == 2) {
      texturavariar = colombiabt;
    } else if (contadorShaken == 4) {
      texturavariar = usabt;
    } else if (contadorShaken > 4){
    contadorShaken = 0;
    }
    //Dibuja el ícono de las banderas
    push();
    //en kiosk 700 queda bien, navegador safari queda bien en 600
    translate(windowWidth - 1350, windowHeight - 600);
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
    if (valoraño == 2016) {
      meshxchange = negro;
    }
    //Inicia nuevo estado de dibujo para dibujar el mundo
    push();
    rotateX(frameCount * 0.01);
    stroke(10);
    scale(2.5);
    texture(meshxchange);
    model(tierra1);
    pop();
    brasilGente();
    brasilDioxido();
    colombiaDioxido();
    colombiaGente();
    usaGente();

  }
  if (estado == 4){
    push();
    translate(0,-200);
    texture(hola);
    plane(781,77);
    pop();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(capture);
  box(200);
    pop();
    push();
    translate(0,200);
    texture(tocap);
    plane(590,34);
    pop();
  }
}

function deviceShaken() {
  contadorShaken = contadorShaken + 1;
  if (contadorShaken >= 7) {
    contadorShaken = 0;
  }
}

function mouseReleased() {
  estado = estado + 1;
  if (estado > 4) {
    estado = 0;
  }
}

//---------------------
// BRASIL
//---------------------


function brasilGente() {
  //año 1960
  if (contadorShaken == 0 && valoraño == 1960) {
    //Dibuja los costa ricas.
    for (var i = 0; i <= floor((uno.values[27]) / 10000000); i = i + 1) {
      push();
      translate(-440 + (i * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1970
  if (contadorShaken == 0 && valoraño == 1970) {
    for (var j = 0; j <= floor((dos.values[27]) / 10000000); j = j + 1) {
      push();
      translate(-440 + (j * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1980
  if (contadorShaken == 0 && valoraño == 1980) {
    for (var k = 0; k <= floor((tres.values[27]) / 10000000); k = k + 1) {
      push();
      translate(-440 + (k * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1990
  if (contadorShaken == 0 && valoraño == 1990) {
    for (var f = 0; f <= floor((cuatro.values[27]) / 10000000); f = f + 1) {
      push();
      translate(-440 + (f * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //año 2000
  if (contadorShaken == 0 && valoraño == 2000) {
    for (var d = 0; d <= floor((cinco.values[27]) / 10000000); d = d + 1) {
      push();
      translate(-440 + (d * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2010
  if (contadorShaken == 0 && valoraño == 2010) {
    for (var e = 0; e <= floor((seis.values[27]) / 10000000); e = e + 1) {
      push();
      translate(-440 + (e * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2012
  if (contadorShaken == 0 && valoraño == 2012) {
    for (var c = 0; c <= floor((siete.values[27]) / 10000000); c = c + 1) {
      push();
      translate(-440 + (c * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2014
  if (contadorShaken == 0 && valoraño == 2014) {
    for (var q = 0; q <= 18; q = q + 1) {
      push();
      translate(-440 + (q * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for (var a = 0; a < 2; a = a + 1) {
      push();
      translate(-440 + (a * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //año 2016
  if (contadorShaken == 0 && valoraño == 2016) {
    for (var w = 0; w <= 18; w = w + 1) {
      push();
      translate(-440 + (w * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for (var t = 0; t <= 2; t = t + 1) {
      push();
      translate(-440 + (t * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
}

function brasilDioxido() {

  //año 1960
  if (contadorShaken == 0 && valoraño == 1960) {
    for (var q = 0; q <= ceil(COuno.values[0] / 50000); q = q + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (q * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  //año 1970
  if (contadorShaken == 0 && valoraño == 1970) {
    for (var w = 0; w <= ceil(COdos.values[0] / 50000); w = w + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (w * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  //año 1980
  if (contadorShaken == 0 && valoraño == 1980) {
    for (var e = 0; e <= ceil(COtres.values[0] / 50000); e = e + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (e * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 1990
  if (contadorShaken == 0 && valoraño == 1990) {
    for (var r = 0; r <= ceil(COcuatro.values[0] / 50000); r = r + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (r * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2000
  if (contadorShaken == 0 && valoraño == 2000) {
    for (var t = 0; t <= ceil(COcinco.values[0] / 50000); t = t + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (t * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2010
  if (contadorShaken == 0 && valoraño == 2010) {
    for (var y = 0; y <= ceil(COseis.values[0] / 50000); y = y + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (y * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2012

  if (contadorShaken == 0 && valoraño == 2012) {
    for (var u = 0; u <= ceil(COsiete.values[0] / 50000); u = u + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (u * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  if (contadorShaken == 0 && valoraño == 2014) {
    for (var o = 0; o <= ceil(COocho.values[0] / 50000); o = o + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (o * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  if (contadorShaken == 0 && valoraño == 2016) {
    for (var p = 0; p <= ceil(COnueve.values[0] / 50000); p = p + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (p * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
}

//--------------------------------
//COLOMBIA
//--------------------------------

function colombiaGente() {
  //año 1960
  if (contadorShaken == 2 && valoraño == 1960) {
    //Dibuja los costa ricas.
    for (var i = 0; i < floor((uno.values[43]) / 10000000); i = i + 1) {
      push();
      translate(-440 + (i * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1970
  if (contadorShaken == 2 && valoraño == 1970) {
    for (var j = 0; j < floor((dos.values[43]) / 10000000); j = j + 1) {
      push();
      translate(-440 + (j * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1980
  if (contadorShaken == 2 && valoraño == 1980) {
    for (var k = 0; k < floor((tres.values[43]) / 10000000); k = k + 1) {
      push();
      translate(-440 + (k * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1990
  if (contadorShaken == 2 && valoraño == 1990) {
    for (var f = 0; f < floor((cuatro.values[43]) / 10000000); f = f + 1) {
      push();
      translate(-440 + (f * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //año 2000
  if (contadorShaken == 2 && valoraño == 2000) {
    for (var d = 0; d < floor((cinco.values[43]) / 10000000); d = d + 1) {
      push();
      translate(-440 + (d * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2010
  if (contadorShaken == 2 && valoraño == 2010) {
    for (var e = 0; e < floor((seis.values[43]) / 10000000); e = e + 1) {
      push();
      translate(-440 + (e * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2012
  if (contadorShaken == 2 && valoraño == 2012) {
    for (var c = 0; c < floor((siete.values[43]) / 10000000); c = c + 1) {
      push();
      translate(-440 + (c * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2014
  if (contadorShaken == 2 && valoraño == 2014) {
    for (var q = 0; q < floor((ocho.values[43]) / 10000000); q = q + 1) {
      push();
      translate(-440 + (q * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //año 2016
  if (contadorShaken == 2 && valoraño == 2016) {
    for (var w = 0; w < floor((nueve.values[43]) / 10000000); w = w + 1) {
      push();
      translate(-440 + (w * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
}

function colombiaDioxido() {

  //año 1960
  if (contadorShaken == 2 && valoraño == 1960) {
    for (var q = 0; q <= ceil(COuno.values[2] / 50000); q = q + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (q * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  //año 1970
  if (contadorShaken == 2 && valoraño == 1970) {
    for (var w = 0; w <= ceil(COdos.values[2] / 50000); w = w + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (w * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  //año 1980
  if (contadorShaken == 2 && valoraño == 1980) {
    for (var e = 0; e <= ceil(COtres.values[2] / 50000); e = e + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (e * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 1990
  if (contadorShaken == 2 && valoraño == 1990) {
    for (var r = 0; r <= ceil(COcuatro.values[2] / 50000); r = r + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (r * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2000
  if (contadorShaken == 2 && valoraño == 2000) {
    for (var t = 0; t <= ceil(COcinco.values[2] / 50000); t = t + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (t * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2010
  if (contadorShaken == 2 && valoraño == 2010) {
    for (var y = 0; y <= ceil(COseis.values[2] / 50000); y = y + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (y * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2012

  if (contadorShaken == 2 && valoraño == 2012) {
    for (var u = 0; u <= ceil(COsiete.values[2] / 50000); u = u + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (u * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  if (contadorShaken == 2 && valoraño == 2014) {
    for (var o = 0; o <= ceil(COocho.values[2] / 50000); o = o + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (o * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  if (contadorShaken == 2 && valoraño == 2016) {
    for (var p = 0; p <= ceil(COnueve.values[2] / 50000); p = p + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (p * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
}

//--------------------------------
//ESTADOS UNIDOS DE AMÉRICA
//--------------------------------

function usaGente() {
  //año 1960
  if (contadorShaken == 4 && valoraño == 1960) {
    //Dibuja los costa ricas.
    for (var i = 0; i < floor((uno.values[249]) / 10000000); i = i + 1) {
      push();
      translate(-440 + (i * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 1970
  if (contadorShaken == 4 && valoraño == 1970) {
    for (var j = 0; j < 18; j = j + 1) {
      push();
      translate(-440 + (j * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
      for ( var f = 0; f<2;f = f+1){
      push();
      translate(-440 + (f * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
      }
    }
  }
  //Año 1980
  if (contadorShaken == 4 && valoraño == 1980) {
    for (var k = 0; k < 18; k = k + 1) {
      push();
      translate(-440 + (k * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
      for ( var z = 0; z < 4; z = z+1){
      push();
      translate(-440 + (z * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
      
      }
    }
  }
  //Año 1990
  if (contadorShaken == 4 && valoraño == 1990) {
    for (var h = 0; h < 18; h = h + 1) {
      push();
      translate(-440 + (h * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for (var r = 0; r < 6; r++){
    push();
      translate(-440 + (r * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();

    }
  }
  //año 2000
  if (contadorShaken == 4 && valoraño == 2000) {
    for (var d = 0; d < 18; d = d + 1) {
      push();
      translate(-440 + (d * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for ( var g = 0; g<8; g++){
     push();
      translate(-440 + (g * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
  //Año 2010
  if (contadorShaken == 4 && valoraño == 2010) {
    for (var e = 0; e < 18; e = e + 1) {
      push();
      translate(-440 + (e * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for (var w = 0; w < 10; w = w +1){
      push();
      translate(-440 + (w * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    
    }
  }
  //Año 2012
  if (contadorShaken == 4 && valoraño == 2012) {
    for (var c = 0; c < 18; c = c + 1) {
      push();
      translate(-440 + (c * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for (var t = 0; t < 12; t = t +1){
      push();
      translate(-440 + (t * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    
    }
  }
  //Año 2014
  if (contadorShaken == 4 && valoraño == 2014 || contadorShaken == 4 && valoraño == 2016) {
    for (var q = 0; q < 18; q = q + 1) {
      push();
      translate(-440 + (q * 50), -250);
      texture(aruba);
      plane(53, 53);
      pop();
    }
    for ( var y = 0; y < 13; y = y +1){
      push();
      translate(-440 + (y * 50), -200);
      texture(aruba);
      plane(53, 53);
      pop();
    }
  }
}

function usaDioxido() {

  //año 1960
  if (contadorShaken == 4 && valoraño == 1960) {
    for (var q = 0; q < 18; q = q + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (q * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var w = 0; w < 18; w++){
    push();
      translate(440 - (w * 50), 200);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var e = 0; e < 18; e++){
    push();
      translate(440 - (e * 50), 150);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
  
  //año 1970
  if (contadorShaken == 4 && valoraño == 1970 || contadorShaken == 4 && valoraño == 1980) {
    for (var r = 0; r < 18; r = r + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (r * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var t = 0; t < 18; t++){
    push();
      translate(440 - (t * 50), 200);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var y= 0; y < 18; y++){
    push();
      translate(440 - (y * 50), 150);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for(var u = 0; u <18; u++){
    push();
      translate(440 - (u * 50), 100);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }


  //año 1990
  if (contadorShaken == 4 && valoraño == 1990 || contadorShaken == 4 && valoraño == 2010 || contadorShaken == 4 && valoraño == 2012 || contadorShaken == 4 && valoraño == 2014 || contadorShaken == 4 && valoraño == 2016) {
    for (var p = 0; p < 18; p = p + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (p * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var a = 0; a < 18; a++){
    push();
      translate(440 - (a * 50), 200);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var s= 0; s < 18; s++){
    push();
      translate(440 - (s * 50), 150);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for(var d = 0; d <18; d++){
    push();
      translate(440 - (d * 50), 100);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for(var f = 0; f<18; f++){
    push();
      translate(440 - (f * 50), 50);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }

  //año 2000
  if (contadorShaken == 4 && valoraño == 2000) {
    for (var g = 0; g < 18; g = g + 1) {
      //dibujar fabrica 
      push();
      translate(440 - (g * 50), 250);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var h = 0; h < 18; h++){
    push();
      translate(440 - (h * 50), 200);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for (var j= 0; j < 18; j++){
    push();
      translate(440 - (j * 50), 150);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for(var k = 0; k <18; k++){
    push();
      translate(440 - (k * 50), 100);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
    for(var l = 0; l<18; l++){
    push();
      translate(440 - (l * 50),50);
      texture(fabrica);
      plane(53, 43);
      pop();
    }
  }
}