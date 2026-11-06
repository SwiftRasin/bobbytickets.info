"use strict";

let plays,buys,talker,talk,disc,discDeg,cdPlayer,playingMusic,yapping,initButtons,selectedItem,cdSong,discVel;
plays = 0;
yapping = false;
initButtons = false;
selectedItem = "";
cdSong = "";
var cdSongPre = "";
discVel = 0;

var choicer;

setTimeout(() => {
    init_deals();
    init_secrets();
}, 100);

function loadCDs() {
    //* <!-- <button id="beyond/0">Watching the Flowers Die</button> -->
    var container = document.getElementsByClassName("choicer")[0];
    choicer = container;
    var albumCover = "../img/shared/disc album.png";


    var h1 = document.createElement("coolfont");
    h1.style = "font-size: 75%;";
    h1.dataset.cdTitle = "Stay by My Side, Sunshine";
    h1.dataset.src = albumCover;
    h1.dataset.trackID = "... my first vocaloid album..?\n everybody's proud right 🥺";
    h1.id = "-";
    h1.textContent = "Stay by My Side, Sunshine";
    choicer.appendChild(h1);


    cdButton("Watching the Flowers Die", "beyond/1", "Watching the Flowers Die (Ft. Natsume Itsuki)", albumCover, "Track 01");
    cdButton("Statues", "beyond/2", "Statues (unfinished)", albumCover, "Track 02", true);
    cdButton("Far and Wide (Interlude)", "beyond/3", "Far and Wide (Interlude) (Ft. GUMI)", albumCover, "Track 03");
    cdButton("Get U Back", "beyond/4", "Get U Back (Ft. Kasane Teto)", albumCover, "Track 04");
    cdButton("Something Real", "beyond/5", "Something Real (Ft. Nick Olman, Kasane Teto & GUMI)", albumCover, "Track 05");
    cdButton("Stay by My Side", "beyond/6", "Stay by My Side (Ft. GUMI) (unfinished)", albumCover, "Track 06", true);
    cdButton("Pure Elements!", "beyond/7", "Pure Elements (Ft. Natsume Itsuki)", albumCover, "Track 07");
    cdButton("Still Awake", "beyond/8", "Still Awake (Ft. Kasane Teto & GUMI)", albumCover, "Track 08");
    cdButton("Shining Through", "beyond/9", "Shining Through (Ft. Natsume Itsuki) (unfinished)", albumCover, "Track 09", true);
    cdButton("Can't Be the Only 1", "beyond/10", "Can't Be the Only 1 (Ft. Kasane Teto, GUMI & Natsume Itsuki) (unfinished)", albumCover, "Track 10", true);
    cdButton("Another Night With You", "beyond/11", "Another Night With You (Ft. Kasane Teto & GUMI) (unfinished)", albumCover, "Track 11", true);
}
function cdButton(name = "", id = "", title = "", src = "", trackID = "", hide = false)
{
    var button = document.createElement("button");
    button.id = id;
    button.textContent = name;
    button.dataset.cdTitle = title;
    button.dataset.src = src;
    button.dataset.trackID = trackID;
    if (hide) {
        button.style = "background-color: #949494;";
    }
    choicer.appendChild(button);
    return 
}

function setup() {
    noCanvas();
    // init_buying();
    // cdCheck();
    disc = document.getElementById("disc");
    cdPlayer = document.getElementById("cd-player");
    cdPlayer.preservesPitch = true;
    discDeg = 0;
    playingMusic = false;
    var cds = document.getElementById("cds");
    for (var i = 0; i < cds.children.length; i++) {
        // if (cds.children[i].id != "cd-demo") {
        //     if (!deals[cds.children[i].id].bought)
        //         cds.children[i].className = "hidden";
        //     else
        //         cds.children[i].className = "";
        // }
        cds.children[i].onclick = (pointer) => {
            var old = cdSongPre ?? "";
            cdSong = pointer.srcElement.id.replace("cd-", "");
            disc.src = "../img/shared/disc.png";
            document.getElementById("mus-name").textContent = pointer.srcElement.dataset.cdTitle;
            document.getElementById("mus-id").textContent = pointer.srcElement.dataset.trackID;
            disc.src = pointer.srcElement.dataset.src;
            if (cdSong == "-" || cdSong == old) {
                console.log("song either already playing or you're not selecting a SONG..");
                return;
            }
            playingMusic = false;
            cdPlayer.src = "../mus/" + cdSong + ".mp3";  
            cdSongPre = cdSong;
            cdSong = pointer.srcElement.id.replace("beyond/", "");
            // switch (cdSong) {
            //     case "0":
            //         disc.src = "../img/shared/disc album.png";
            //         break;
            // }
        };
    }

    /**
     * <button id="cd-btd cityscape">PRISTINE CD labeled "another night with you" (ß3000)</button>
    <button id="cd-btd majestic">PRISTINE CD labeled "majestic bobby's theme" (ß2750)</button>
    <button id="cd-btd main">CD labeled "a main menu theme" (ß2500)</button>
    <button id="cd-robby">CD labeled "robby's theme" (ß1500)</button>
     * 
     * 
     */

    cdPlayer.onplay = () => {
        playingMusic = true;
    }
    cdPlayer.onpause = () => {
        playingMusic = false;
    }
    cdPlayer.onended = () => {
        playingMusic = false;
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
    if (hoveringElement != undefined)
    {
        //1.2
        var sz = hoveringElement.dataset.w*1.2;
        hoveringElement.width += (sz - hoveringElement.width)/5;
    }
}