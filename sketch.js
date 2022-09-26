let f;
function preload() {
  f = loadFont('SecularOne-Regular.ttf');
}

var x=250;
var y=250;
var xspeed = 0.5;
var yspeed = -0.5;
var direita = false;
var esquerda = false;
var cima = false;
var baixo = false;
 
function setup() {
  //createCanvas (1280, 720);
  createCanvas (displayWidth, displayHeight);
  background(0);
  amarillo = color (255, 255,0);
  rosa = color (255, 0, 255);
  ciano = color (0, 255, 255);
  verde = color (57, 255, 20);
}

function draw() {
//background(0);
  
  //textFont(f);
  textSize (width/35);
  text ("pandemia", x, y);
  //stroke(20);
  //strokeWeight (3);
  fill (255);
  
  //print (mouseX); 
  //medir os pixels do txt, então diminuir esse valor do width
  
  x=x+xspeed;
  y=y+yspeed;
  
//______________________________DIREITA______ROSA_________________________ 
//if (x > width - 59 || x < 0){
if (x > width - 156){
  xspeed = xspeed * -1;
  
  direita = true;
  esquerda = false;
  cima = false;
  baixo = false;
 }

 else if (direita == true){
  fill (rosa);
  }
//_________________________________CIANO___________________________ 
if (x < 0){
  xspeed = xspeed * -1;
  
  esquerda = true;
  direita = false;
  cima = false;
  baixo = false;
}
else if (esquerda == true){
  fill (ciano) 
}
//_______________________INFERIOR________VERDE_____________________________
//if (y > height || y < 6){ //menor que 6 pra não sumir a palavra do canvas
  if (y > height){
  yspeed = yspeed *-1;
    
  cima = true;
  direita = false;
  esquerda = false;
  baixo = false;
  
 }
 else if (cima == true){
   fill (verde);
 }
 //___________________SUPERIOR__________AMARILLO____________________________
  if (y < 0 + 18) {
  yspeed = yspeed *-1;
    
  baixo = true;  
  direita = false;
  esquerda = false;
  cima = false;
 }
 else if (baixo == true){
  fill (amarillo);
 } 
}
