let title,bobbium_face,font,gamble;

var money = 0;

function preload() {
    title = loadImage("assets/title.png");
    bobbium_face = loadImage("../bobby3D/tex.png");
    font = loadFont('../../monospace.ttf');
    gamble = loadImage("assets/button.png");
}

function setup() {
    createCanvas(400, 400, WEBGL);//.parent('bobby3D-container');
    loadFont("courier");
}

function draw() {
    //bobbyium(50);
    noSmooth();
    background(50);//22

    //bobbium_grid();
    resetMatrix();
    ///image(title,-200,-200);
    texture(title);
    translate(-70,-120,50);
    //noStroke();
    strokeWeight(0);
    plane(title.width,title.height);
    fill("white");

    textFont(font);
    textAlign("right");
    textSize(30);
    textStyle(BOLDITALIC);
    text(money + " ß", 250, -40);

    image(gamble, 0,200);
    bobbium(15, -110, 112, 0);
    bobbium(15, 85, 112, 0);
}

function bobbium_grid()
{
    var size = 25;
    var sy/*scrollY*/ = -150;
    var sx/*scrollX*/ = -150;
    for (var i = 0; i < 25; i++)
    {
        bobbium(size,sx,sy,0);
        if (((i+1) % 5) == 0) {
            sy += size*3;
            sx = -150-size*3;
        }
            
        sx += size*3;
    }
    
}

function bobbium(size,x,y,z)
{
    //push();
    strokeWeight(2.5);
    resetMatrix();
    translate(x,y,z);
    rotateY(frameCount * 0.05);

    translate(size+2,size,size + 0.5);
    image(bobbium_face,-(size*2),-(size*2),size*2-2,size*2-2);
    translate(-size-2,-size,-size - 0.5);

    boxWithoutFront(size * 2);

    texture(bobbium_face);
    //push();
    beginShape();
    vertex(-size, -size, size, 0, 0);
    vertex(size, -size, size, bobbium_face.width, 0);
    vertex(size, size, size, bobbium_face.width, bobbium_face.height);
    vertex(-size, size, size, 0, bobbium_face.height);
    endShape(CLOSE);
    //pop();

}

function boxWithoutFront(size) {
    let half = size / 2;
  
    // Back face
    beginShape();
    vertex(-half, -half, -half);
    vertex(half, -half, -half);
    vertex(half, half, -half);
    vertex(-half, half, -half);
    endShape(CLOSE);
  
    // Left face
    beginShape();
    vertex(-half, -half, -half);
    vertex(-half, -half, half);
    vertex(-half, half, half);
    vertex(-half, half, -half);
    endShape(CLOSE);
  
    // Right face
    beginShape();
    vertex(half, -half, -half);
    vertex(half, -half, half);
    vertex(half, half, half);
    vertex(half, half, -half);
    endShape(CLOSE);
  
    // Top face
    beginShape();
    vertex(-half, -half, -half);
    vertex(half, -half, -half);
    vertex(half, -half, half);
    vertex(-half, -half, half);
    endShape(CLOSE);
  
    // Bottom face
    beginShape();
    vertex(-half, half, -half);
    vertex(half, half, -half);
    vertex(half, half, half);
    vertex(-half, half, half);
    endShape(CLOSE);
  }