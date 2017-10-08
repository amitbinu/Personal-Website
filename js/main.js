var numbers = [];

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  canvas.parent('binaryNums');
  for (var i = 0; i < 200; i++) {
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

function Number() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  this.number = getRandomIntInclusive(0,1) + "";
  this.update = function() {

    this.z = this.z - 5;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill('#42f450');
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    textFont('Arial',20);
    text(this.number,sx,sy);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}