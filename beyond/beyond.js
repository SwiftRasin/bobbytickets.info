"use strict";

let plays,buys,talker,talk,disc,discDeg,cdPlayer,playingMusic,cdSong,discVel;
plays = 0;
cdSong = "";
var playbackSlider;
var playbackLabel;
var cdSongPre = "";
var loadedLyrics = "";
discVel = 0;

var choicer;

setTimeout(() => {
    init_deals();
    init_secrets();
}, 100);

function getLyrics(file, callback)
{
    fetch(file)
    .then(response => {
        if (!response.ok) throw new Error('File not found');
        return response.text(); // 2. Convert the stream to plain text
    })
    .then(textContent => {
        callback(textContent.replaceAll("\n\n", "<div style=\"line-height: 3;\">").replaceAll("\n", "<div style=\"line-height: 1.5;\">"));
    })
    .catch(error => console.error('Error:', error));
}


function loadCDs() {
    //* <!-- <button id="beyond/0">Watching the Flowers Die</button> -->
    var container = document.getElementsByClassName("choicer")[0];
    choicer = container;
    var albumCover = "../img/shared/disc album.png";
    var miscCover = "../img/shared/disc red.png";

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

    var h1 = document.createElement("coolfont");
    h1.style = "font-size: 75%; padding-top:5%;";
    h1.dataset.cdTitle = "other stuff";
    h1.dataset.src = miscCover;
    h1.dataset.trackID = "... songs that are NOT strictly vocaloid...";
    h1.id = "-";
    h1.textContent = "Miscellaneous";
    choicer.appendChild(h1);

    cdButton("comforting waltz", "beyond/comforting waltz", "Comforting Waltz", miscCover, "not the most proud of this one", "misc");
    cdButton("exotic plants", "beyond/exotic plants", "Exotic Plants", miscCover, "..blues...", "misc");
    cdButton("experimental song", "beyond/experimental song", "Experimental Song", miscCover, "", "misc");
    cdButton("microtonal song", "beyond/microtonal song", "<u>Microtonal</u> Song", miscCover, "a short one..", "misc");
    cdButton("this song hates you", "beyond/piano that hates you", "This Song <coolfont style=\"color: rgb(255, 47, 47)\">Hates</coolfont> You", miscCover, "does that lead sound <coolfont style=\"color: rgba(0, 255, 255, 0.49)\">familiar</coolfont>..?", "misc");
    cdButton("quiet breeze", "beyond/quiet breeze", "Quiet Breeze", miscCover, "what a nice contrast to the previous song...", "misc");
    cdButton("royal place", "beyond/royal place", "Royal Place", miscCover, "it has the motif. the motif. <br>look at the other bobbyco CDs..", "misc");
    cdButton("get U back (old)", "beyond/stop that", "Get U Back (Old)", miscCover, "very old lyrics...", "misc");
}
function cdButton(name = "", id = "", title = "", src = "", trackID = "", hide = false)
{
    var button = document.createElement("button");
    button.id = id;
    button.textContent = name;
    button.dataset.cdTitle = title;
    button.dataset.src = src;
    button.dataset.trackID = trackID;
    if (hide == true) {
        button.style = "background-color: #949494;";
    }
    if (hide == "misc") {
        button.style = "background-color: #8b93ff;";
    }
    choicer.appendChild(button);
    return 
}

function setup() {
    noCanvas();
    // init_buying();
    // cdCheck();
    disc = document.getElementById("disc");

    // var cdStyle = "-webkit-mask-image: .../img/shared/; mask-image: url(w3logo.png);mask-repeat: no-repeat;mask-position: center;";
    // disc.style = cdStyle;

    playbackLabel = document.getElementById("playbackLabel");
    playbackSlider = document.getElementById("playback");
    playbackSlider.addEventListener("input", (event) => {
        playbackLabel.textContent = "playback speed: " + playbackSlider.value;
        cdPlayer.playbackRate = playbackSlider.value;
    });

    cdPlayer = document.getElementById("cd-player");
    cdPlayer.preservesPitch = false;
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
            document.getElementById("mus-name").innerHTML = pointer.srcElement.dataset.cdTitle;
            getLyrics("../mus/" + cdSong + ".txt", (lyrics) => {
                document.getElementById("mus-id").innerHTML = document.getElementById("mus-id").innerHTML + 
                "<br><coolfont style=\"font-size: 50%;\">" + lyrics + "</coolfont>";
            });
            document.getElementById("mus-id").innerHTML = pointer.srcElement.dataset.trackID;
            disc.src = pointer.srcElement.dataset.src;
            if (cdSong == "-" || cdSong == old) {
                console.log("song either already playing or you're not selecting a SONG..");
                return;
            }
            playingMusic = false;
            cdPlayer.src = "../mus/" + cdSong + ".mp3";  
            cdPlayer.playbackRate = playbackSlider.value;
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