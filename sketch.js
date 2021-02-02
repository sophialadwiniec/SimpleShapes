
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
 }


// Draw code goes here
function draw() {
  background(20,112,94,44);
  // center pink piece on screen shape 1 
  star(50,50);

  // double ellipse one 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(windowWidth/4,windowHeight/4,50);
  fill(71,71,128,50);
  // x y width and height 
  ellipse(windowWidth/4,windowHeight/4,100,100); 

  // double ellipse two 
  fill(216,183,250,98);
  // x y width and height 
  ellipse(windowWidth/60,windowHeight/4,50);
  fill(71,71,128,50);
  // x y width and height 
  ellipse(windowWidth/60,windowHeight/4,100,100); 

  // double ellipse three
  fill(216,183,250,98);
  // x y width and height 
  ellipse(windowWidth/60 - 350,windowHeight/4,50);
  fill(71,71,128,50);
  // x y width and height 
  ellipse(windowWidth/60 - 350,windowHeight/4,100,100); 


}

function star(x1, y1) {
// moves to a different position on the screen 
  translate(windowWidth/2, windowHeight/4);
  noStroke();
  for (let x = 0; x < 10; x ++) {
    fill(245,190,241,96);
    // x y width height 
    ellipse(x1, y1, 10, 60);
    rotate(PI/5);
  }
}

