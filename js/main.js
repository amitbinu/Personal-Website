var size = 1;
var numbers = [];
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.parent('binaryNums');
  sizer(windowWidth);
  
}

function sizer(width){

	  if (width > 800) {
	  	size = 140;
	  }
	  else if (width > 400) {
	  	size = 140;
	  }
	  else{
	  	size = 110;
	  }
	  numbers = [];
	  for (var i = 0; i < size; i++) {
	    numbers[i] = new Number();
	  }
}
function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].update();
    numbers[i].show();
  }
}

function windowResized(){
 canvas.size(windowWidth,windowHeight);
 sizer(windowWidth);
}

function Number() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.number = getRandomIntInclusive(0,1) + "";
  this.update = function() {
    this.z = this.z - 8;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  this.show = function() {
    fill('#42f450');
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 40,5);
    textFont('Arial',r);
    text(this.number,sx,sy);
    stroke('#42f450');
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}