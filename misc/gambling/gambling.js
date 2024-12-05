let title,span,button,realNumber,range,money,state,scary,countdown,stateInc;//,font
/*images*/ let happy,good,tense,sad,idleH,idleS; //idle_happy, idle_sad

range = [5,20];
money = 10;
state = "idle";
scary = 0;
realNumber = 0;
countdown = 3;

stateInc = 0; //used for checking if you're still in the same instance of a state!

function preload() {
    title = loadImage("assets/title.png");
    happy = loadImage("assets/happy.png");
    good = loadImage("assets/good.png");
    tense = loadImage("assets/ant.png");
    sad = loadImage("assets/sad.png");
    idleH = loadImage("assets/idle_happy.png");
    idleS = loadImage("assets/idle_sad.png");
}

function setup() {
    if (localStorage.getItem("gambling_money") != undefined)
        money = localStorage.getItem("gambling_money");
    else
        money = 10;
    createCanvas(400,400);
    span = document.getElementById("money");
    button = document.getElementById("gamble");
    //font = loadFont("../../monospace.ttf");
    console.log(span);
    console.log(span.children[0]);
    button.onclick = () => {
        if (state == "idle" || state == "gambled")
            switchState("gambling");
    }
    //textFont(font);
}

function draw() {
    fill("white");
    noSmooth();
    scary = Math.floor(randomNumber(range[0],range[1]))/10;
    background(50);
    textSize(25);
    textAlign("right","center");
    textStyle(BOLD);
    text("(range: " + range[0]/10 + " - " + range[1]/10 + ")", 395,25);
    switch (state)
    {
        case "idle":
            textSize(100);
            textAlign("center","center");
            if (realNumber > 1 || realNumber == 0)
                image(idleH, 200-idleH.width/2,200-idleH.height/2);
            else
                image(idleS, 200-idleS.width/2,200-idleS.height/2);
            //text("😀", 200,200);
            break;
        case "gambling":
            textSize(75);
            textAlign("center","center");
            image(tense, 200-tense.width/2,200-tense.height/2);
            text("\nx"+scary, 200,250);
            textSize(50);
            text("\n\n\n\n\n"+countdown, 200,200);
            break;
        case "gambled":
            textSize(75);
            textAlign("center","center");
            if (realNumber > 1)
                image(happy, 200-happy.width/2,200-happy.height/2);
            else if (realNumber == 1)
                image(good, 200-good.width/2,200-good.height/2);
            else
                image(sad, 200-sad.width/2,200-sad.height/2);
            text("\nx"+realNumber, 200,250);
            // textSize(50);
            // text("\n\n\n\n\n"+countdown, 200,200);
            textSize(20);
            text("gamble again?", 200,375);
            break;
    }
    image(title,0,0);
    span.children[0].textContent = "money: " + money + "ß";
    localStorage.setItem("gambling_money", money);
}

function switchState(newState) {
    stateInc++;
    state = newState;
    switch (state)
    {
        case "idle":
            break;
        case "gambling":
            countdown = 3;
            setTimeout(() => {
                countdown = 2;
                setTimeout(() => {
                    countdown = 1;
                },1000);
            },1000);
            setTimeout(() => {
                realNumber = doRandom(1);
                money = Math.round((money * realNumber)*10)/10;
                switchState("gambled");
            },3000);
            break;
        case "gambled":
            var thisInc = stateInc;
            setTimeout(() => {
                if (state == "gambled" && stateInc == thisInc)
                    switchState("idle");
            },5000);
            break;
    }
}

function doRandom(precision)
{
    return Math.floor(randomNumber(range[0],range[1]))/(Math.pow(10,precision));
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}