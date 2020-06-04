let create = [];
let create1 = [];
var a = 500;
var b = 300;
var v = 2;
var v1 = 10;
var v2 = 2
var t = 0;
var color1 = 0;
var w = 200;
var h = 200;
var v3 = 5;
var velocity = 5;
let img;
var color2 = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 5; i++) {
    var x = 100;
    var y = 0;
    var z = 50;
    create[i] = new creator(x, y, z);
  }
  for(let j = 0; j < 5; j++) {
    var x1 = 100;
    var y1 = height;
    var z1 = 50;
  create1[j] = new creator1(x1, y1, z1);
  }
  img = loadImage("img1.jpg");
}
function draw() {
  background(220);
  image(img, 0, h - 300);
  img.resize(width, height + h);
    h = h + v3;
  if(h > 200) {
    v3 = 0;
  } else {
    v3 = 5;
  }
  
  for(let i = 0; i < create.length; i++) {
    create[i].show();
  }
  // for(let a1 of create) {
  //   a1.show();
  //   for(let other of create) {
  //    a1.intersect(other);
  //    if(color1 > 0) {
  //   create.splice(3, 1);
  // }
      // if(a1 !== other && a1.intersect(other)) {
      //   create.splice(i, 1);  
      // }
  //   }
  // }
  
   for(let j = 0; j < create1.length; j++) {
    create1[j].show1();
  }
  fill(255);
  ellipse(a, b, 50, 50);
  b = b + v;
  if((keyIsPressed) && (key == 'j')) {
    v = -v1;
    v1 = v1 - v2;
    // w = w - 1;
    h = h - velocity;
     if(h < 0) {
    velocity = 0;
  } else {
    velocity = 5;
  }
    
    
    
    if(v1 < 0) {
      v2 = 0;
    }
  } else {
    v = 2;
    v1 = 10;
    v2 = 2;
  }
  if(t > 0) {
    background(1);
    fill(color2);
    stroke(255);
    rect(550, 300, 350, 150);
    fill(255);
    textSize(100);
    text("restart", width/2.5, height/2);
    if(mouseX > 550 && mouseX < 900 && mouseY > 300  && mouseY < 450) {
      color2 = 100;
  } else {
    color2 = 1;
  }
     if(mouseIsPressed && mouseX > 550 && mouseX < 900 && mouseY > 300  && mouseY < 450) {
       t = 0;
       b = 300;
     }
}
}
class creator {
  constructor(x, y, z) {
    this.x = random(0, width);
    this.y = y;
    this.z = z;
    this.r = 100;
  }
//   intersect(other) {
//     let d = dist(this.x, this.y, other.x, other.y);
//     if(d < 100) {
//     color1 = 1;
//     }

//   }
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, 100, this.r);
    this.x = this.x - 2;
    if(this.x < 0) {
      this.x = width;
      this.r = random(100, 500);
    }
    if(a > this.x - 25 && a < this.x + 75 && b < this.r + 25) {
      t = 1;
    }
  }
}
class creator1 {
  constructor(x1, y1, z1) {
    this.x1 = random(0, width);
    this.y1 = y1;
    this.z1 = z1;
    this.r1 = 700;
  }
  show1() {
    fill(0, 255, 0);
    rect(this.x1, this.r1, 100, this.y1);
    this.x1 = this.x1 - 2;
    if(this.x1 < 0) {
      this.x1 = width;
      this.r1 = random(550, 700);
    }
    if(a > this.x1 - 25 && a < this.x1 + 75 && b > this.r1 - 25) {
      t = 1;
    }
  }
}