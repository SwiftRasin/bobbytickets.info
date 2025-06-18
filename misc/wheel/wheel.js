let title,span,button,button2,button3,realNumber,range,money,state,scary,countdown,stateInc;//,font
/*images*/ let happy,good,tense,sad,bad,great,idleH,idleS,idleG; //idle_happy, idle_sad

range = [1,20];
money = 10;
state = "idle";
scary = 0;
realNumber = 0;
countdown = 3;

stateInc = 0; //used for checking if you're still in the same instance of a state!

let cheating = false;
let losing = false;

function preload() {
    title = loadImage("assets/title.png");
    happy = loadImage("assets/happy.png");
    good = loadImage("assets/good.png");
    tense = loadImage("assets/ant.png");
    sad = loadImage("assets/sad.png");
    bad = loadImage("assets/bad.png");
    great = loadImage("assets/great.png");
    idleH = loadImage("assets/idle_happy.png");
    idleS = loadImage("assets/idle_sad.png");
    idleG = loadImage("assets/idle_great.png");
}

function setup() {
    if (localStorage.getItem("gambling_money") != undefined)
        money = localStorage.getItem("gambling_money");
    else
        money = 10;
    createCanvas(400,400, WEBGL);
    span = document.getElementById("money");
    button = document.getElementById("gamble");
    button2 = document.getElementById("gamble2");
    button3 = document.getElementById("gamble3");
    //font = loadFont("../../monospace.ttf");
    console.log(span);
    console.log(span.children[0]);
    //textFont(font);
}

function keyPressed() {
    if (keyCode == 221 && keyIsDown(16/*left shift*/))
        money += 1000;
}

function draw() {
    orbitControl(0,1,0);
    if (money != localStorage.getItem("gambling_money")) {
        console.log("money is desynced." + "\nmoney: " + money + "\nlocalStorage \"gambling_money\":" + localStorage.getItem("gambling_money"));
        money = localStorage.getItem("gambling_money");
    }
    background(50);
    textSize(25);
    textAlign("right","center");
    textStyle(BOLD);
    text("(range: " + range[0]/10 + " - " + range[1]/10 + ")", 395,25);
    image(title,-200,-200);
    var calcMoney = Math.floor(money*10000)/10000;
    span.children[0].textContent = "money: " + calcMoney + "ß";
    if (calcMoney == 0 && state != "recover")
    {
        switchState("recover");
    }
    if (keyIsDown(82/*r*/) && keyIsDown(16/*left shift*/)) {
        money = 10;
        localStorage.setItem("gambling_money", 10);
    }
    
    //console.log(money);
}

function coin()
{
    return Math.random() < 0.5;
}

function intense()
{
    return coin() ? (range[0]/10) : (range[1]/10);
}

function tenNothing()
{
    return coin() ? (0) : (10);
}

function switchState(newState) {
    stateInc++;
    state = newState;
    switch (state)
    {
        case "idle":
            break;
    }
}

function doRandom(precision)
{
    var result = Math.floor(randomNumber(range[0],range[1]+1))/(Math.pow(10,precision));
    //if (result == range[1])
       // console.log(result);
    return result;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}