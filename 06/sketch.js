var song1;
var song2;
var pausaboton;
var pausabotob2;
var amps1;
var amps2;
var trazos1 = [];
var trazos2 = [];
var sliders1;
var sliders2;
var tamsliderx = 60;
var tamslidery = 20;
var posb1x;
var posb1y;
var posb2x;
var posb2y;
var panuno;
var pandos;
var genvolum;
var soundlocx;
var soundlocY;
var r = 255;
var g = 0;
let font;
fontsize = 20;



function fijarVolumen() {

  var genvolum = map(mouseX, 0, width, 0.0, 1.1);
  song1.setVolume(genvolum);
  song2.setVolume(genvolum);
}

function pausarCancion() {

  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}

function pausarCancion2() {

  if (song2.isPlaying()) {
    song2.pause();
  } else {
    song2.play();
  }
}



function preload() {
  song1 = loadSound('Technologic.mp3');
  song2 = loadSound('AIDIW.mp3');
  font = loadFont('Datalegreya-Thin.otf');
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song1.play();
  song2.play();
  pausaboton = createButton('ll');
  pausaboton.mousePressed(pausarCancion);
  pausaboton.position((windowWidth / 2) - 50, windowHeight / 2 + 10);
  pausaboton2 = createButton('ll');
  pausaboton2.mousePressed(pausarCancion2);
  pausaboton2.position((windowWidth / 2) - 50, (windowHeight / 2) - 30);
  amps1 = new p5.Amplitude();
  amps2 = new p5.Amplitude();
  amps1.setInput(song1);
  amps2.setInput(song2);
  posb1x = (windowWidth / 2) - 10;
  posb1y = (windowHeight / 2) + 12;
  posb2x = windowWidth / 2 - 10;
  posb2y = windowHeight / 2 - 28;
  sliders1 = createSlider(0, 10, 5);
  sliders1.position(posb1x, posb1y);
  sliders2 = createSlider(0, 10, 5);
  sliders2.position(posb2x, posb2y);
  soundlocx = 0;
  soundlocy = (windowHeight / 2) - 10;
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  
}

function draw() {

  background(255);
  stroke(255);
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  var vol1 = amps1.getLevel();
  var vol2 = amps2.getLevel();
  trazos1.push(vol1);
  trazos2.push(vol2);
  stroke(255, 0, 0);
  noFill();
  beginShape();
  for (var i = 0; i < trazos1.length; i++) {
    var y1 = map(trazos1[i], 0, 1, height, height / 2);
    vertex(i, y1);

  }
  endShape();

  if (trazos1.length > width) {
    trazos1.splice(0, 1);

  }



  fill(255);

  stroke(0, 0, 255);
  noFill();
  beginShape();
  for (var j = 0; j < trazos2.length; j++) {
    var y2 = map(trazos2[j], 0, 1, 0, height);
    vertex(j, y2);

  }
  endShape();

  if (trazos2.length > width) {
    trazos2.splice(0, 1);
  }
  fill(255);

  var speeds1 = (sliders1.value()) / 5;
  song1.rate(speeds1);

  var speeds2 = (sliders2.value()) / 5;
  song2.rate(speeds2);


  if (mouseIsPressed == true) {
    if (mouseButton === LEFT) {
      panuno = map(mouseX, 0, width, -1.0, 1.0);
      song1.pan(panuno);
    } else if (mouseButton === RIGHT) {
      pandos = map(mouseX, 0, width, -1.0, 1.0);
      song2.pan(pandos);
    }
    if ((mouseX > soundlocx && mouseX < soundlocx + windowWidth && mouseY > soundlocy && mouseY < soundlocy + 20)) {
      //background(100);
      noStroke();
      fill(r - mouseX, g + (mouseX - 100), 0);
      let xm = mouseX;
      let xy = mouseY;
      let xc = constrain(mouseY, soundlocy, soundlocy + 20);
      rect(xm, soundlocy, 20, 20);
      fijarVolumen();

    }
  }
  noStroke();
  noFill();
  rect(soundlocx, soundlocy, windowWidth, 20);
   textAlign(CENTER);
  drawWords(width * 0.5);
}
  function drawWords(x) {
  
  fill(0);
  text('volumen', 50, windowHeight/2);
}

