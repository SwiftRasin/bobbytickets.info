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
    createCanvas(400,400);
    span = document.getElementById("money");
    button = document.getElementById("gamble");
    button2 = document.getElementById("gamble2");
    button3 = document.getElementById("gamble3");
    //font = loadFont("../../monospace.ttf");
    console.log(span);
    console.log(span.children[0]);
    button.onclick = () => {
        if (state == "idle" || state == "gambled")
            switchState("gambling");
        if (state == "recover")
        {
            money = 10;
            switchState("idle");
        }
    }
    button2.onclick = () => {
        if (state == "idle" || state == "gambled")
            switchState("intense gambling");
        if (state == "recover")
        {
            money = 10;
            switchState("idle");
        }
    }
    button3.onclick = () => {
        if (state == "idle" || state == "gambled")
            switchState("10x or nothing");
        if (state == "recover")
        {
            money = 10;
            switchState("idle");
        }
    }
    //textFont(font);
}

function draw() {
    cheating = false;
    losing = false;
    if (keyIsDown(67/*c*/) && keyIsDown(16/*left shift*/))
        cheating = true;
    if (keyIsDown(76/*l*/) && keyIsDown(16/*left shift*/))
        losing = true;
    fill("white");
    noSmooth();
    scary = doRandom(1);//Math.floor(randomNumber(range[0],range[1]))/10;
    if (state == "intense gambling")
        scary = intense();
    if (state == "10x or nothing")
        scary = tenNothing();
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
            if (realNumber < 1)
                image(idleS, 200-idleS.width/2,200-idleS.height/2);
            else if (realNumber == (range[1]/10))
                image(idleG, 200-idleG.width/2,200-idleG.height/2);
            if ((realNumber >= 1 && realNumber < (range[1]/10)))
                image(idleH, 200-idleH.width/2,200-idleH.height/2);
            else
                image(idleH, 200-idleH.width/2,200-idleH.height/2);

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
        case "intense gambling":
            textSize(75);
            textAlign("center","center");
            image(tense, 200-tense.width/2,200-tense.height/2);
            text("\nx"+scary, 200,250);
            textSize(50);
            text("\n\n\n\n\n"+countdown, 200,200);
            break;
        case "10x or nothing":
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
            if (realNumber > 1 && realNumber < (range[1]/10))
                image(happy, 200-happy.width/2,200-happy.height/2);
            else if (realNumber == 1)
                image(good, 200-good.width/2,200-good.height/2);
            else if (realNumber == (range[1]/10) || realNumber == 10)
                image(great, 200-great.width/2,200-great.height/2);
            else if (realNumber == (range[0]/10) || realNumber == 0)
                image(bad, 200-bad.width/2,200-bad.height/2);
            else
                image(sad, 200-sad.width/2,200-sad.height/2);
            
            text("\nx"+realNumber, 200,250);
            // textSize(50);
            // text("\n\n\n\n\n"+countdown, 200,200);
            textSize(20);
            text("gamble again?", 200,375);
            break;
        case "recover":
            textSize(75);
            textAlign("center","center");
            image(sad, 200-sad.width/2,200-sad.height/2);
            // textSize(50);
            // text("\n\n\n\n\n"+countdown, 200,200);
            text("\nbankrupt", 200,260);
            textSize(20);
            text("you've lost all of your money.\npress the 'gamble' button to reset.", 200,375);
            break;
    }
    image(title,0,0);
    var calcMoney = Math.floor(money*10000)/10000;
    span.children[0].textContent = "money: " + calcMoney + "ß";
    if (calcMoney == 0 && state != "recover")
    {
        switchState("recover");
    }
    localStorage.setItem("gambling_money", money);
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
                if (cheating)
                    realNumber = range[1]/10;
                if (losing)
                    realNumber = range[0]/10;
                money = money * realNumber;
                switchState("gambled");
            },3000);
            break;
        case "intense gambling":
            countdown = 3;
            setTimeout(() => {
                countdown = 2;
                setTimeout(() => {
                    countdown = 1;
                },1000);
            },1000);
            setTimeout(() => {
                realNumber = intense();
                if (cheating)
                    realNumber = range[1]/10;
                if (losing)
                    realNumber = range[0]/10;
                money = money * realNumber;
                switchState("gambled");
            },3000);
            break;
        case "10x or nothing":
            countdown = 3;
            setTimeout(() => {
                countdown = 2;
                setTimeout(() => {
                    countdown = 1;
                },1000);
            },1000);
            setTimeout(() => {
                realNumber = tenNothing();
                if (cheating)
                    realNumber = 10;
                if (losing)
                    realNumber = 0;
                money = money * realNumber;
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
    var result = Math.floor(randomNumber(range[0],range[1]+1))/(Math.pow(10,precision));
    //if (result == range[1])
       // console.log(result);
    return result;
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}