const path = window.location.pathname;

const isHome = path === "/" || path === "/index.html" || path === "/index.htm" || path === "/bobbytickets.info/" || path === "/bobbytickets.info/index.html";

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
    div.appendChild(createBarOption("mail","contact/contact.html",100,"contact info"));
    div.appendChild(createBarOption("news","news/news.html",100,"bobbyco news"));

    container.appendChild(div);
}

function createBarOption(img,page,width,tooltip,indexName)
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