
// changing color variables for ellipses 
var r = 0; 
var b = 0; 
var g = 0; 
var t = 0; 

// changing color variables for flowers 
var r1 = 0; 
var b1 = 0; 
var g1 = 0; 
var t1 = 0; 

// changing color variables for background 
var b_b = 0; 
var r_b = 0;
var g_b = 0; 
var t_b = 0; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER); 
 }


function draw() {
  background(b_b, r_b, g_b, t_b); 
  
  mouseMoved(); 

  drawEllipses();  

  flower(2,4);
  flower(4,4); 
  flower(4/3,4); 

  flower(2,4/3);
  flower(4,4/3); 
  flower(4/3,4/3); 
}


// draws 6 total ellipses 
function drawEllipses() {
  // double ellipse one 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(width/2,height/2,50);
  fill(r,b,g,t);
  // x y width and height 
  ellipse(width/2,height/2,100,100); 

  // double ellipse two 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(width/4,height/2,50);
  fill(r,b,g,t);
  // x y width and height 
  ellipse(width/4,height/2,100,100); 

  // double ellipse three 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(width * (3/4) ,height/2,50);
  fill(r,b,g,t);
  // x y width and height 
  ellipse(width * (3/4) ,height/2,100,100);
}


// function that makes the page turn pink if you mouse is on the upper half and blue if your mouse is on the lower half
function mouseMoved(){
  if(mouseY < height/2){
    r1 = 245;  
    b1 = 190; 
    g1 = 241; 
    t1 = 96;

    r = 245; 
    b = 192; 
    g = 236; 
    t = 96; 

    b_b = 250; 
    r_b = 86;
    g_b = 160; 
    t_b = 98;  
 
  } else {
    r1 = 52; 
    b1 = 224; 
    g1 = 187; 
    t1 = 88;

    r = 79; 
    b = 176; 
    g = 160; 
    t = 69; 

    b_b = 20; 
    r_b =112;
    g_b = 94; 
    t_b = 44;
  }
}


// allows for the page to be made bigger or smaller and let the canvas and drawings move with it
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// draws a flower on the page 
function flower(width1, height1) {
// x left/right translation, y up/down translation 
  translate(width/width1,height/height1); 
  noStroke();
  for (let x = 0; x < 10; x ++) {
    fill(r1,b1,g1,t1);
    // x y width height 
    ellipse(10,30, 20, 50); 
    rotate(PI/5);
  }
  translate(-(width/width1),-(height/height1)); 
}

