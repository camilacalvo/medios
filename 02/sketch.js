function setup() {
  createCanvas(800,800);
      

}

function draw() {
  background(253,249,248);
  for(var x = 0; x < width-400; x +=200){
    for(var y = 0; y <height; y+=200){
      noStroke();
      fill(91,84,66);
      triangle(x,y,x,y+50,x+50,y+50);
      triangle(x+50,y,x+50,y+50,x+100,y+50);
      triangle(x,y+50,x,y+100,x+50,y+100);
      triangle(x+50,y+50,x+100,y+50,x+100,y+100);
      triangle(x+100,y,x+150,y,x+150,y+50);
      triangle(x+150,y,x+200,y,x+200,y+50);
      triangle(x+100,y+50,x+150,y+50,x+150,y+100);
     
      triangle(x+150,y+50,x+150,y+100,x+200,y+100);
      triangle(x,y+100,x+50,y+100,x+50,y+150);
      triangle(x+50,y+100,x+100,y+100,x+100,y+150);
      triangle(x+0,y+150,x+50,y+150,x+50,y+200);
      triangle(x+50,y+150,x+50,y+200,x+100,y+200);
      triangle(x+100,y+100,x+100,y+150,x+150,y+150);
      triangle(x+150,y+100,x+150,y+150,x+200,y+150);
      triangle(x+100,y+150,x+100,y+200,x+150,y+200);
      triangle(x+150,y+150,x+200,y+150,x+200,y+200);
      
      
      
      
    }
  } 
   for(var x = 400; x < width; x +=200){
    for(var y = 0; y <height; y+=200){
      noStroke();
      fill(91,84,66);
      triangle(x+50,y,x+50,y+50,x,y+50);
      triangle(x+50,y+50,x,y+100,x,y+50);
      triangle(x+100,y+50,x+50,y+100,x+100,y+100);
      triangle(x+50,y+50,x+100,y+50,x+100,y+0);
     triangle(x,y+100,x+50,y+100,x,y+150);
      triangle(x+50,y+100,x+100,y+100,x+50,y+150);
      triangle(x+50,y+150,x+50,y+200,x,y+200);
   
     
      triangle(x+50,y+150,x+100,y+150,x+50,y+200);
      triangle(x+100,y,x+150,y,x+100,y+50);
     triangle(x+100,y+100,x+150,y+100,x+150,y+50);
      triangle(x+150,y+50,x+150,y+100,x+200,y+50);
     triangle(x+150,y+100,x+150,y+150,x+100,y+150);
      triangle(x+200,y+100,x+200,y+150,x+150,y+150);
      triangle(x+100,y+150,x+100,y+200,x+150,y+150);
      triangle(x+150,y+200,x+200,y+200,x+200,y+150);
      triangle(x+150,y+0,x+150,y+50,x+200,y+0);
      
      
      
      
      
    }
  } 
  
 
  }
  