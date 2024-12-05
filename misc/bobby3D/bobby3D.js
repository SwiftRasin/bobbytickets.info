let shape,img,bobbium_img,bobbium_alt;

function setup() {
  createCanvas(200, 200, WEBGL);//.parent('bobby3D-container');
}

function preload() {
  shape = loadModel('bobby3D.obj', true);
  img = loadImage('tex.png');
  bobbium_img = loadImage("bobbium.png");
  bobbium_alt = loadImage("bobbium_alt.png");
}

function draw() {
  noSmooth();
  background(22);
  rotateY(frameCount * 0.05);
  orbitControl(0,1,0);
  //push();



  // // Draw all sides except the front
  let size = 50;
  //texture(bobbium_img);
  boxWithoutFront(size * 2);

  // // Draw the front side with the texture
  //strokeWeight(2.5);
  // beginShape();
  // texture(bobbium_img);
  // vertex(-size, -size, size, 0, 0);
  // vertex(size, -size, size, bobbium_img.width, 0);
  // vertex(size, size, size, bobbium_img.width, bobbium_img.height);
  // vertex(-size, size, size, 0, bobbium_img.height);
  // endShape(CLOSE);
  //pop();
  //model(shape);
  //box(100);
}

function boxWithoutFront(size) {
  let half = size / 2;

  strokeWeight(2.5);

  // Front face
  beginShape();
  texture(bobbium_img);
  vertex(-half, -half, half, 0, 0);
  vertex(half, -half, half, bobbium_img.width, 0);
  vertex(half, half, half, bobbium_img.width, bobbium_img.height);
  vertex(-half, half, half, 0, bobbium_img.height);
  endShape(CLOSE);

  // Back face
  beginShape();
  texture(bobbium_img);
  vertex(half, -half, -half, 0, 0);
  vertex(-half, -half, -half, bobbium_img.width, 0);
  vertex(-half, half, -half, bobbium_img.width, bobbium_img.height);
  vertex(half, half, -half, 0, bobbium_img.height);
  endShape(CLOSE);

  // Left face
  beginShape();
  texture(bobbium_img);
  vertex(-half, -half, -half, 0, 0);
  vertex(-half, -half, half, bobbium_img.width, 0);
  vertex(-half, half, half, bobbium_img.width, bobbium_img.height);
  vertex(-half, half, -half, 0, bobbium_img.height);
  endShape(CLOSE);

  // Right face
  beginShape();
  texture(bobbium_img);
  vertex(half, -half, half, 0, 0);
  vertex(half, -half, -half, bobbium_img.width, 0);
  vertex(half, half, -half, bobbium_img.width, bobbium_img.height);
  vertex(half, half, half, 0, bobbium_img.height);
  endShape(CLOSE);

  // Top face
  beginShape();
  texture(bobbium_alt);
  vertex(-half, -half, -half, 0, 0);
  vertex(half, -half, -half, bobbium_img.width, 0);
  vertex(half, -half, half, bobbium_img.width, bobbium_img.height);
  vertex(-half, -half, half, 0, bobbium_img.height);
  endShape(CLOSE);

  // Bottom face
  beginShape();
  texture(bobbium_alt);
  vertex(-half, half, -half, 0, 0);
  vertex(half, half, -half, bobbium_img.width, 0);
  vertex(half, half, half, bobbium_img.width, bobbium_img.height);
  vertex(-half, half, half, 0, bobbium_img.height);
  endShape(CLOSE);
}