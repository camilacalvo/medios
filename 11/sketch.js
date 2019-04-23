let data;

function preload() {
  data = loadTable('DATA.csv', 'csv', 'header');
}

function ValoresColumnas(tab, colName) {
  let vals = data.getColumn(colName);
  let obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  // numero de filas
  console.log(data.getRowCount());
  // numero de columnas
  console.log(data.columns);

  //variable que almacena numero de filas 0-

  // Mirar valores maximos y minimos para la columna Value
  let numr = ValoresColumnas(data, "Value");
  console.log("el numero minimo es", numr.min);
  console.log("el numero maximo es", numr.max);
  //Hacer linea de la media
  let media = 333081;
  stroke(255, 0, 0);
  strokeWeight(0.5);
  let valymedia = map(media, numr.min, numr.max, height, 0);
  line(0, valymedia, width, valymedia);
  noStroke();
  textSize(10);
  fill(255, 0, 0);
  text(media, windowWidth / 2, valymedia - 3);
  //grafica de "puntos" con los valores del csv
  for (var i = 0; i < data.getRowCount(); i++) {
    //Obtener los valores de la columna número 4  
    let tipo = data.get(i, 5);
    //Obtener los valores de la columna 8
    let valornum = data.getString(i, 9);
    //Obtener los valores de la columna 2
    let genero = data.getString(i, 3);
    if (tipo == "City proper" && genero == "Female") {
      stroke(255, 128, 128);
      let pmXpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let pmYpos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      text("👩🏼", pmXpos, pmYpos);

    }

    if (tipo == "City proper" && genero == "Male") {
      // draw pm2.5
      stroke(255, 128, 128);
      let pmXpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let pmYpos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      //point(pmXpos, pmYpos);
      text("👱🏻‍♂️", pmXpos, pmYpos);

    }

    if (tipo == "Urban agglomeration" && genero == "Male") {
      stroke(255);
      let Xpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let Ypos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      // point(Xpos, Ypos);  
      text("🧔🏻", Xpos, Ypos);

    }

    if (tipo == "Urban agglomeration" && genero == "Female") {
      stroke(255);
      let Xpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let Ypos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      text("👩🏻", Xpos, Ypos);
      // point(Xpos, Ypos);  

    }

    if (tipo == "City proper" && genero == "Both Sexes") {
      // draw pm2.5
      stroke(255, 128, 128);
      let pmXpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let pmYpos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      text("👨‍👩‍👧", pmXpos, pmYpos);
    }

    if (tipo == "Urban agglomeration" && genero == "Both Sexes") {
      stroke(255);
      let Xpos = map(i, 0, data.getRowCount() - 40, 0, width, true);
      let Ypos = map(numr.values[i], numr.min, numr.max, height, 0);
      strokeWeight(3);
      textSize(7);
      text("👪", Xpos, Ypos);

    }

  }
  fill(0);
  noStroke();
  textSize(15);
  text("Lista de convenciones:", 60, windowHeight / 3);
  text("👩🏻 Mujeres que viven en aglomeraciones urbanas", 240, windowHeight / 3);
  text("👩🏼 Mujeres que viven en ciudades", 240, (windowHeight / 3) + 30);
  text("🧔🏻 Hombres que viven en aglomeraciones urbanas", 240, (windowHeight / 3) + 60);
  text("👱🏻‍♂️ Hombres que viven en ciudades", 240, (windowHeight / 3) + 90);
  text("👪 Ambos géneros en aglomeraciones urbanas", 240, (windowHeight / 3) + 120);
  text("👨‍👩‍👧 Ambos géneros en ciudades", 240, (windowHeight / 3) + 150);
}

function draw() {

}