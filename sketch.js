
// changing color variables for ellipses 
var e_r = 0; 
var e_b = 0; 
var e_g = 0; 
var e_t = 0; 

// changing color variables for flowers 
var f_r = 0; 
var f_b = 0; 
var f_g = 0; 
var f_t = 0; 

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

  for(let x = 1; x < 7; x++){
    for(let i = 1; i < 7; i++){
      if(x % 2 != 0){
        flower((7/i), (7/x)); 
      }else{
        drawEllipse((i/7), (x/7))
      }
    }
  }
  
}


// draws 2 total ellipses 
function drawEllipse(width1, height1) {
 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(width * width1,height * height1,50, 50);
  fill(e_r,e_b,e_g,e_t);
  // x y width and height 
  ellipse(width* width1,height * height1,100,100); 

}


// function that makes the page turn pink if you mouse is on the upper half and blue if your mouse is on the lower half
function mouseMoved(){
  if((mouseY < height/2) && (mouseX < width/2)){
    f_r = 245;  
    f_b = 190; 
    f_g = 241; 
    f_t = 96;

    e_r = 245; 
    e_b = 192; 
    e_g = 236; 
    e_t = 96; 

    b_b = 250; 
    r_b = 86;
    g_b = 160; 
    t_b = 98;  
 
  } else if ((mouseY > height/2) && (mouseX > width/2)) {
    f_r = 52; 
    f_b = 224; 
    f_g = 187; 
    f_t = 88;

    e_r = 79; 
    e_b = 176; 
    e_g = 160; 
    e_t = 69; 

    b_b = 20; 
    r_b =112;
    g_b = 94; 
    t_b = 44;
  } else if ((mouseY < height/2) && (mouseX > width/2)) {
    f_r = 83; 
    f_b = 232; 
    f_g = 145; 
    f_t = 91;

    e_r = 14; 
    e_b = 227; 
    e_g = 103; 
    e_t = 89; 

    b_b = 9; 
    r_b = 102;
    g_b = 48; 
    t_b = 40;
  } else if ((mouseY > height/2) && (mouseX < width/2)) {
    f_r = 167; 
    f_b = 86; 
    f_g = 245; 
    f_t = 96;

    e_r = 120; 
    e_b = 13; 
    e_g = 219; 
    e_t = 86; 

    b_b = 46; 
    r_b = 6;
    g_b = 99; 
    t_b = 39;
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
    fill(f_r,f_b,f_g,f_t);
    // x y width height 
    ellipse(10,30, 20, 50); 
    rotate(PI/5);
  }
  translate(-(width/width1),-(height/height1)); 
}

