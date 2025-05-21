"use strict";

let plays,buys,talker,talk,disc,discDeg,cdPlayer,playingMusic,yapping,initButtons,selectedItem,cdSong,discVel;
plays = 0;
yapping = false;
initButtons = false;
selectedItem = "";
cdSong = "";
discVel = 0;

setTimeout(() => {
    init_deals();
    init_secrets();
    init_buying();
    cdCheck();
}, 100);

function init_buying() {
    if (!initButtons) {
        initButtons = true;
        var buyer = document.getElementById("buyer");
        for (var i = 0; i < buyer.children.length; i++) {
            buyer.children[i].onclick = (pointer) => {
                var id = pointer.srcElement.id.replace("buyer-", "cd-");
                selectedItem = id;
                document.getElementById("buyfr").className = "";
                var lines = [
                    "Are you sure you want this?",
                    "Check it out.``.``.``````%Only minimal scratches!",
                    "That's gonna be a fair %price of ß" + new Intl.NumberFormat().format(deals[id].cost) + ".",
                    "Shiny.",
                    "Do you like it?",
                    "Turns out.``.``.````%Dumpster dives are profitable.",
                    "I don't know why DJ bobby %threw this one out."
                ];
                var diaUse = lines[randomNumber(0, lines.length-1)];
                playDialogue(diaUse, 50);
            }
        }
    }
    
    var keys = Object.keys(deals);
    for (var i = 0; i < keys.length; i++)
    {
        console.log("buyer-" + keys[i]);
        if (deals[keys[i]].bought)
            document.getElementById("buyer-" + keys[i].replace("cd-", "")).className = "hidden";
    }

    // if (deals["cd-dj"].bought)
    //     document.getElementById("buyer-dj").className = "hidden";
    // if (deals["cd-doom"].bought)
    //     document.getElementById("buyer-doom").className = "hidden";
    // if (deals["cd-funny"].bought)
    //     document.getElementById("buyer-funny").className = "hidden";
}

function buyItem(id) {
    document.getElementById("buyfr").className = "hidden";
    if (deals[id] != null) {
        if (!deals[id].bought && (localStorage.getItem("gambling_money") >= deals[id].cost)) {
            console.log("successful purchase.");
            localStorage.setItem("gambling_money", localStorage.getItem("gambling_money") - deals[id].cost);
            deals[id].bought = true;
            localStorage.setItem("bobby_shop", JSON.stringify(deals));
            console.log(localStorage.getItem("bobby_shop"));
            //todo: MORE dialogue here please
            var lines = [
                "Wow!```` Look at it..",
                "You can pop it into%the CD player now.",
                "Take a listen. I don't %think you'll regret it.",
                "I hope you enjoy it.``.``.`````%Well,`` I actually don't care."
            ];
            var diaUse = lines[randomNumber(0, lines.length-1)];
            playDialogue(diaUse, 50);
        }
        if ((localStorage.getItem("gambling_money") < deals[id].cost))
        {
            console.log("not enough money");
            //todo: MORE dialogue here please
            var lines = [
                "What?``` You don't have the money.``.``.``?````%Why'd you come then?",
                "Not enough money.``.``.",
                "You don't have the money.````%At least your money isn't in the negatives.``.``.",
                "Maybe the items don't want you.``.``.``````%Heck, you don't even have enough money.",
                "You're lucky this website doesn't have debt.``.``.``````%What's a \"website\"?",
                "Come back with more money, please.``.``.",
                "Make it happen someday.```%Right now,`` you don't have the money."
            ];
            var diaUse = lines[randomNumber(0, lines.length-1)];
            playDialogue(diaUse, 50);
        }
    }
    init_buying();
    cdCheck();
}

function cdCheck() {
    var cds = document.getElementById("cds");
    for (var i = 0; i < cds.children.length; i++) {
        if (cds.children[i].id != "cd-demo") {
            if (!deals[cds.children[i].id].bought)
                cds.children[i].className = "hidden";
            else
                cds.children[i].className = "";
        }
    }
}

function setup() {
    noCanvas();
    // init_buying();
    // cdCheck();
    document.getElementById("buy").onclick = buyButton;
    document.getElementById("sell").onclick = sellButton;
    document.getElementById("talk").onclick = talkButton;
    document.getElementById("buyfr").onclick = () => {buyItem(selectedItem)};
    disc = document.getElementById("disc");
    cdPlayer = document.getElementById("cd-player");
    cdPlayer.preservesPitch = true;
    discDeg = 0;
    playingMusic = false;
    var cds = document.getElementById("cds");
    for (var i = 0; i < cds.children.length; i++) {
        if (cds.children[i].id != "cd-demo") {
            if (!deals[cds.children[i].id].bought)
                cds.children[i].className = "hidden";
            else
                cds.children[i].className = "";
        }
        cds.children[i].onclick = (pointer) => {
            cdSong = pointer.srcElement.id.replace("cd-", "");
            playingMusic = false;
            cdPlayer.src = "../mus/" + cdSong + ".mp3";
            switch (cdSong) {
                case "dj":
                    document.getElementById("mus-name").textContent = "CD labeled \"dj bobby's theme\"";
                    break;
                case "doom":
                    document.getElementById("mus-name").textContent = "CD labeled \"we're doomed\"";
                    break;
                case "funny":
                    document.getElementById("mus-name").textContent = "CD labeled \"funny song\"";
                    break;
                case "demo":
                    document.getElementById("mus-name").textContent = "CD labeled \"demo\"";
                    break;
            }
        };
    }

    cdPlayer.onplay = () => {
        playingMusic = true;
    }
    cdPlayer.onpause = () => {
        playingMusic = false;
    }
    cdPlayer.onended = () => {
        playingMusic = false;
    }

    talker = document.getElementById("talker");
    talker.className = "hidden";
    buyer.className = "hidden";
    for (var i = 0; i < talker.children.length; i++) {
        var child = talker.children[i];
        // if (talker.nodeName == "#button")
        child.onclick = (pointer) => {
            var id = pointer.srcElement.id;
            talkPrompt(pointer.srcElement.id);
            switch (id) {
                case "talker-who":
                    pointer.srcElement.textContent = "What are you?";
                    pointer.srcElement.id = "talker-what";
                    break;
                case "talker-gambling":
                    pointer.srcElement.textContent = "What did you have?";
                    pointer.srcElement.id = "talker-had";
                    break;
                case "talker-had":
                    pointer.srcElement.textContent = "Yes, tell me";
                    pointer.srcElement.id = "talker-gambling-backstory";
            }
        };
    }
}

function draw() {
    discDeg += discVel;
    if (playingMusic)
        discVel += 200;
    if (playingMusic)
        discVel *= 0.8;
    else
        discVel *= 0.9;
    // if (discDeg > 360)
    //     discDeg -= 360;
    // if (discDeg < 0)
    //     discDeg += 360;
    disc.style = "transform: rotate(" + discDeg + "deg);"
}

function talkButton() {
    console.log("talk");
    if (talker.className == "hidden") {
        talker.className = "choicer";
        buyer.className = "hidden";
        document.getElementById("buyfr").className = "hidden";
    }
    else
        talker.className = "hidden";
}

function talkPrompt(id) {
    switch (id) {
        case "talker-who":
            playDialogue("I'm bobby. %I sell cool stuff back here.", 50);
            break;
        case "talker-what":
            playDialogue("..What?```%What kind of question is that?", 50);
            break;
        case "talker-series6":
            playDialogue("Series 6? ```%Of what?", 50);
            break;
        case "talker-where":
            playDialogue("Where?```.`.` The d`u`m`p`s`t`e`r`.", 50);
            break;
        case "talker-gambling":
            playDialogue(".`.`Gambling?``` I don't gamble anymore.``.``.``%I` l`o`s`t` e`v`e`r`y`t`h`i`n`g`.", 50);
            break;
        case "talker-had":
            playDialogue(".`.`.`Do you want the full story?", 50);
            break;
        case "talker-gambling-backstory":
            playDialogue(
                "Fine. I'll tell you.%I used to be rich.````` F`i`l`t`h`y` rich...```%How did I make the money?" + 
                " .```.```.```Gambling.````````%When I won big.``.``.``. I knew I had to stop,`` %but I couldn't." +
                "```````⚠I kept winning.```` And I won big,``` over and over.```%Spin again.``` I kept betting more and more money.```" +
                "%I kept GETTING more and more money,``` and it all %went to my head.``.``.``.``` Until.```.```.``````⚠" +
                "I bet it all,``` and I lost.`````⚠And that day, I decided% to quit."
            , 60, true);
            yapping = true;
            break;
        default:
            playDialogue("error", 0);
            break;
    }
}

function sellButton() {
    document.getElementById("buyfr").className = "hidden";
    buyer.className = "hidden";
    talker.className = "hidden";
    var lines = [
        "I don't want anything from you.",
        "I already have enough stuff.",
        "You have no value to your name, other than in ß.",
        "Wow!`` I'd really like to buy my own products.`.`.`.!`````%Not."
    ];
    var diaUse = lines[randomNumber(0, lines.length-1)];
    playDialogue(diaUse, 50);
}

function buyButton() {
    console.log("buy");
    if (buyer.className == "hidden") {
        buyer.className = "choicer";
        talker.className = "hidden";
        document.getElementById("buyfr").className = "hidden";
        var lines = [
            "Oh? You'd like to buy something?  %What do you want?",
            "Do any of these appeal to you?",
            "Please, pick something out.",
            "Money is tasty.",
            "I've been thinking about a new deal.. %Buy one, get one for full price.",
            "That's a nice ß" + new Intl.NumberFormat().format(localStorage.getItem("gambling_money")) + " right there. %``How do I know? ```````Lucky guess..",
            "..Gambling? I don't gamble anymore.    %I haven't in a long time.`.`.",
            "Do you want anything?",
            "How do we burn CDs..? %l`e`t`'`s` just say it's a s`e`c`r`e`t``.``.``",
            "..\"bobby tickets\"?```%Sorry, I don't sell such n`o`n`s`e`n`s`e`."
        ];
        var diaUse = lines[randomNumber(0, lines.length-1)];
        if (buys == 0)
            diaUse = lines[0];
        buys++;
        playDialogue(diaUse, 50);
    }
    else {
        buyer.className = "hidden";
        document.getElementById("buyfr").className = "hidden";
    }
}

function playDialogue(text = "", speed = 0, story = false) {
    if (yapping && !story) {
        console.log("did you really just do that?");
        yapping = false;
        playDialogue("did you really just ignore that?", 50);
    }
    else
    {
        //console.log("playing dialogue \"" + text + "\"");
        var content = "";
        var i = 0;
        plays++;
        var curPlays = plays + 0;
        var playing = setInterval(() => {
            var cont = true;
            if (curPlays != plays)
                cont = false;
            if (!cont) {
                console.log("dialogue interrupted!");
                clearInterval(playing);
            }
            if (text.charAt(i) == "") {
                console.log("cannot continue.. " + text.charAt(i));
                cont = false;
                yapping = false;
                clearInterval(playing);
            }
            if (cont) {
                var char = text.charAt(i);
                if (char == "%")
                    char = "\n";
                if (char == "`")
                    char = "";
                if (char == "⚠") {
                    char = "";
                    content = "";
                }
                content = content + char;

                // console.log(content);
            }
            
            document.getElementById("dialogueText").textContent = content;
            i++; 
        }, speed);
    }
    
}