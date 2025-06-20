var isChecklist = false;
var initalized = false;

WebFont.load({
    google: {
        families: ['Courier Prime:400,400i,700,700i']
    }
});

const path = window.location.pathname;

const isHome = path === "/" || path === "/index.html" || path === "/index.htm" || path === "/bobbytickets.info/" || path === "/bobbytickets.info/index.html";

let barDiv;

var secrets = {
    "s1": {unlocked: false},
    "BILL CLINTON": {unlocked: false},
    "5b": {unlocked: false}
};

var deals = {
    "cd-dj": {bought: false, cost: 1000},
    "cd-doom": {bought: false, cost: 500},
    "cd-funny": {bought: false, cost: 1000},
    "cd-demo2": {bought: false, cost: 50},
    "cd-cowboy": {bought: false, cost: 100},
    "cd-bobbytsu": {bought: false, cost: 500},
    "cd-happy": {bought: false, cost: 1000},
    "cd-skeptical": {bought: false, cost: 50},
    "cd-bald": {bought: false, cost: 25}
}



function init_deals() {
    console.log("initializing deals...");
    if (localStorage.getItem("bobby_shop") == "[object Object]")
        localStorage.setItem("bobby_shop", JSON.stringify(deals));
    if (localStorage.getItem("bobby_shop") != null) {
        var localDeals = JSON.parse(localStorage.getItem("bobby_shop"));
        var localKeys = Object.keys(localDeals);
        for (var i = 0; i < localKeys.length; i++)
        {
            deals[localKeys[i]] = localDeals[localKeys[i]];
        }
    }
}

function randomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function init_secrets() {
    initalized = true;
    console.log("initializing secrets...");
    if (localStorage.getItem("bobbyco_secrets") != null) {
        var localSecrets = JSON.parse(localStorage.getItem("bobbyco_secrets"));
        var localKeys = Object.keys(localSecrets);
        for (var i = 0; i < localKeys.length; i++)
        {
            secrets[localKeys[i]] = localSecrets[localKeys[i]];
            // if (secrets["5b"].unlocked)
            //     addBar(createBarOption("question", "question/question.html",90,"question"));
        }
    }
}

function setup() {
    noCanvas();
}

function draw() {
    if (!isChecklist && !initalized) {
        init_deals();
        init_secrets();
    }
}

function subpage(dir)
{
    if (dir !== "") {
        dir = "/" + dir;
        if (window.location.href.includes("/bobbytickets.info/"))
            dir = "/bobbytickets.info" + dir;
        window.location.href = window.location.origin + dir;
    }
    else
    {
        if (window.location.href.includes("/bobbytickets.info/"))
            dir = "/bobbytickets.info/";
        window.location.href = window.location.origin + dir;
    }
}

function addBar(element) {
    barDiv.appendChild(element);
}

function bar()
{
    var container = document.getElementsByClassName("logo")[0];

    var div = document.createElement("div");
    div.class = "logo";
    div.id = "slides";

    var bobbyco = document.createElement("img");
    bobbyco.style = "vertical-align: up;";
    bobbyco.width = 300;
    bobbyco.src = "bobbyco.png";
    bobbyco.onerror = function()
    {
        if (isHome)
            this.src = "img/shared/bobbyco.png";
        else
            this.src = "../img/shared/bobbyco.png";
    }
    div.appendChild(bobbyco);

    //? reference <img style="padding-left: 50px; vertical-align: bottom;" src="img/shared/bobby.png" width="75px">
    // var bobby = document.createElement("img");
    // bobby.style = "padding-left: 50px; vertical-align: bottom;";
    // bobby.width = 75;
    // bobby.src = "img/shared/bobby.png";
    // div.appendChild(bobby);

    //todo   reference for the rest:
    ////(only using these prefixes for the "Better Comments" vscode extension)
    //! Home
    //!  <img style="padding-left: 50px; vertical-align: top;" src="img/shared/home.png" width="75px" onclick="subpage('')">
    //!  <span style="color: #000;" onclick="subpage('')"><coolfont><b>home</b></coolfont></span>
  
    //? Checklist
    //?  <img style="padding-left: 50px; vertical-align: top;" src="img/shared/checklist.png" width="75px" onclick="subpage('checklist')">
    //?  <span style="color: #000;" onclick="subpage('checklist')"><coolfont><b>checklist</b></coolfont></span>
  
    //* Contact
    //*  <img style="padding-left: 50px; vertical-align: bottom;" src="img/shared/mail.png" width="100px" onclick="subpage('contact')">
    //*  <span style="color: #000;" onclick="subpage('contact')"><coolfont><b>contact</b></coolfont></span>
    
    div.appendChild(createBarOption("home","",65,"home page"));
    div.appendChild(createBarOption("checklist","checklist/checklist.html",75,"checklist page"));
    // div.appendChild(createBarOption("mail","contact/contact.html",100,"contact info"));
    div.appendChild(createBarOption("news","news/news.html",100,"bobbyco news"));
    div.appendChild(createBarOption("history", "history/history.html",90,"history"));
    div.appendChild(createBarOption("misc", "misc/misc.html",90,"misc"));
    div.appendChild(createBarOption("question", "question/question.html",90,"question"));
    // div.appendChild(createBarOption("question", "question/question.html",90,"question"));

    container.appendChild(div);

    barDiv = div;
}

function createBarOption(img,page,width,tooltip)
{
    var option = document.createElement("img");
    option.style = "padding-left: 50px; vertical-align: top;";
    option.width = width;
    option.src = "../img/shared/"+ img +".png";
    option.dataset.page = page;
    option.dataset.w = width;
    option.title = tooltip;
    option.onerror = function()
    {
        option.src = "img/shared/"+ img +".png";
    }
    option.onmouseover = function()
    {
        this.width = this.dataset.w*1.2;
    }
    option.onmouseleave = function()
    {
        this.width = this.dataset.w;
    }
    option.onclick = function()
    {
        subpage(this.dataset.page);
    }
    return option;
}