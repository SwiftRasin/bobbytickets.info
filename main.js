function preloadImages(array) { //! yoinked and modified from https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript
    if (!preloadImages.list) {
        preloadImages.list = {};
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            //var index = list[img.src];
            // if (index !== -1) {
            //     // remove image from the array once it's loaded
            //     // for memory consumption reasons
            //     list.splice(index, 1);
            // }
            console.log("image " + "\"" + this.src + "\"" + " loaded!");
        }
        list[array[i]] = img;
        img.src = array[i];
    }
    console.log(list);
    console.log(preloadImages.list);
}


function makeTicket(name, series, image, quantity, deployed, value)
{
    return {
        name: name,
        series: series,
        image: "img/series"+series+"/"+image+".png",
        quantity: quantity,
        deployed: deployed,
        value: value
    }
}

function bye_ls()
{
    localStorage.clear();
}


var bobby_tickets = {
    "series1": {
        "available": false,

        "bobby": makeTicket("bobby", 1, "bobby", 12, true, 1)
    },
    "series2": {
        "available": false,

        "happy bobby": makeTicket("happy bobby", 2, "happy bobby", 24, true, 1),
        "bobby is skeptical": makeTicket("bobby is skeptical", 2, "bobby is skeptical", 24, true, 2),
        "scary bobby": makeTicket("scary bobby", 2, "scary bobby", 24, true, 1),
        "bobby AMALGAMATION": makeTicket("bobby AMALGAMATION", 2, "bobby AMALGAMATION", 24, true, 1),    
    },
    "series3": {
        "available": false,

        "angry bobby": makeTicket("angry bobby", 3, "angry bobby", 12, true, 2),
        "bobby JR": makeTicket("bobby JR", 3, "bobby JR", 12, true, 1),
        "dumbfounded bobby": makeTicket("dumbfounded bobby", 3, "dumbfounded bobby", 12, true, 2),
        "gold statue of bobby": makeTicket("gold statue of bobby", 3, "gold statue of bobby", 6, true, 5),
        "pixel bobby": makeTicket("pixel bobby", 3, "pixel bobby", 12, true, 3),
        "shocked bobby": makeTicket("shocked bobby", 3, "shocked bobby", 12, true, 1),
        "fancy bobby": makeTicket("fancy bobby", 3, "fancy bobby", 12, true, 3),
        "robby": makeTicket("robby", 3, "robby", 12, true, 1),
    },
    "series4a": {
        "available": false,

        "COOL AS ICE": makeTicket("COOL AS ICE", "4a", "COOL AS ICE", 12, true, 10),
        "..blobby ticket?": makeTicket("..blobby ticket?", "4a", "blobby", 24, true, 1),
        "king bobby": makeTicket("king bobby", "4a", "king bobby", 24, true, 2),
        "bobby died": makeTicket("bobby died", "4a", "bobby died", 24, true, 1),
        "NOT-BOBBY": makeTicket("NOT-BOBBY", "4a", "NOT BOBBY", 24, true, 1),
        "DRAGGED IN": makeTicket("DRAGGED IN", "4a", "DRAGGED IN", 12, true, 5),
        "3D BOBBY": makeTicket("3D BOBBY", "4a", "3D BOBBY", 12, true, 5),
        "menace bobby": makeTicket("menace bobby", "4a", "menace bobby", 24, true, 2),
        "tekcit ybbob": makeTicket("tekcit ybbob", "4a", "tekcit ybbob", 24, true, 1),
        "OBSERVED": makeTicket("OBSERVED", "4a", "OBSERVED", 20, true, 3),
        "chunky bobby": makeTicket("chunky bobby", "4a", "chunky bobby", 24, true, 2),
        "traumatized bobby": makeTicket("traumatized bobby", "4a", "traumatized bobby", 24, true, 2),
    },
    "series4b": {
        "available": false,

        "nerd bobby": makeTicket("nerd bobby", "4b", "nerd bobby", 36, true, 2),
        "caffeinated bobby": makeTicket("caffeinated bobby", "4b", "caffeinated bobby", 36, true, 2),
        "hardworker bobby": makeTicket("hardworker bobby", "4b", "hardworker bobby", 36, true, 3),
        "nine-to-five": makeTicket("nine-to-five", "4b", "nine-to-five", 36, true, 3),
        "very happy bobby": makeTicket("very happy bobby", "4b", "very happy bobby", 18, true, 5),
        "bobbytsu ツ": makeTicket("bobbytsu ツ", "4b", "bobbytsu ツ", 36, true, 1),
        "THE OPPOSITION": makeTicket("THE OPPOSITION", "4b", "THE OPPOSITION", 18, true, 5),
        "what even is this": makeTicket("what even is this", "4b", "what even is this", 36, true, 1),
        "emo bobby": makeTicket("emo bobby", "4b", "emo bobby", 36, true, 2),
        "disgusted bobby": makeTicket("disgusted bobby", "4b", "disgusted bobby", 36, true, 2),
        "snowman bobby": makeTicket("snowman bobby", "4b", "snowman bobby", 36, true, 3),
        "dizzy bobby": makeTicket("dizzy bobby", "4b", "dizzy bobby", 36, true, 2),
    },
    "series5a": {
        "available": true,

        "(un)dead bobby": makeTicket("(un)dead bobby", "5a", "(un)dead bobby", 24, true, 2),
        "BBQ bobby": makeTicket("BBQ bobby", "5a", "BBQ bobby", 24, true, 2),
        "bobby krueger": makeTicket("bobby krueger", "5a", "bobby krueger", 24, true, 3),
        "bobby": makeTicket("bobby", "5a", "bobby", 24, true, 1),
        "clown bobby": makeTicket("clown bobby", "5a", "clown bobby", 24, true, 3),
        "DJ bobby": makeTicket("DJ bobby", "5a", "DJ bobby", 24, true, 3),
        "evil bobby": makeTicket("evil bobby", "5a", "evil bobby", 24, true, 2),
        "frankenstein bobby": makeTicket("frankenstein bobby", "5a", "frankenstein bobby", 24, true, 3),
        "polter bobby": makeTicket("polter bobby", "5a", "polter bobby", 24, true, 2),
        "pumpkin bobby": makeTicket("pumpkin bobby", "5a", "pumpkin bobby", 12, true, 10),
        "scary bobby.. again": makeTicket("scary bobby.. again", "5a", "scary bobby.. again", 24, true, 2),
        "spraypainter bobby": makeTicket("spraypainter bobby", "5a", "spraypainter bobby", 24, true, 2),
        "bobby & robby": makeTicket("bobby & robby", "5a", "TAG TEAM bobby & robby", 24, true, 2),
        "vampire bobby": makeTicket("vampire bobby", "5a", "vampire bobby", 24, true, 2),
        "very angry bobby": makeTicket("very angry bobby", "5a", "very angry bobby", 24, true, 2),
        "what": makeTicket("what", "5a", "what", 24, true, 1),
    },
}

var curSeries = "none";

var checklist = [];

var alltickets = [];

function updChecklist(item, add, series)
{
    var itemName = series + "/" + item;
    // console.log(item+add+series);
    // console.log(itemName);
    if (add && checklist.indexOf(itemName) == -1)
    {
        checklist.push(itemName);
    }
    else
    {
        if (checklist.indexOf(itemName) == -1) {
            console.log("dammit");
            return;
        }
        checklist.splice(checklist.indexOf(itemName), 1);
    }
    save_list();
    //console.log(checklist);
}

function check_list(item)
{
    return (checklist.indexOf(item) != -1);
}

function update_all()
{
    for (var i = 0; i < alltickets.length; i++)
    {
        if (curSeries != "none" && curSeries != "all" )
            showTickets(curSeries);
        else if (curSeries == "all") {
            showAllTickets();
        }
    }
}

function clear_list()
{
    checklist = [];
    for (var i = 0; i < alltickets.length; i++)
    {
        alltickets[i].childNodes[0].checked = false;
    }
    save_list();
}

function get_list()
{
    if (localStorage.getItem("checklist") != null)
        return localStorage.getItem("checklist").split(",");
    else
        return [];
}

function save_list()
{
    localStorage.removeItem("checklist");
    localStorage.setItem("checklist", checklist);
}

/* unnecessary function */
// function formatAll()
// {
//     var finalString = "";
//     for (var i = 0; i < checklist.length; i++)
//     {
//         finalString += checklist[i] + ((checklist.length > 1) ? "\n" : "");
//     }
//     return finalString;
// }

function export_list()
{
    save(checklist, 'tickets-checklist.txt');
}

function import_list() 
{
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt'; // Optional: restrict to text files
    input.style.display = 'none';

    input.addEventListener('change', function() {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                checklist = event.target.result.split("\n");//(""+(event.target.result)).split(",");
                while (checklist[checklist.length-1] == "")
                {
                    checklist.pop();
                }
                update_all();
                save_list();
                console.log(checklist);
            };
            reader.readAsText(file);
        }
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}

function setup() {
    noCanvas();
    console.log('q5.js is working');
    
    checklist = get_list();
    if (checklist == undefined || checklist == "")
        checklist = [];
}

function draw()
{
    
    for (var i = 0; i < alltickets.length; i++)
    {
        if (alltickets[i].children[0].checked)
            alltickets[i].id = "checked";
        else
            alltickets[i].id = "";

        
        ticketHover(alltickets[i], alltickets[i].defhover);
    }
}

function ticketHover(ticket, hover)
{
    if (hover) {
        ticket.style.transform = "scale(0,0," + ((1.1*ticket.defwidth) - ticket.style.width)/10 + ", 1)";
    }
    else {
        ticket.style.transform = "scale(0,0," + ((ticket.defwidth) - ticket.style.width)/10 + ", 1)";
    }
}

function showAllTickets(clear = true)
{
    if (clear)
        clearTickets();
    var allSeries = Object.keys(bobby_tickets);
    console.log(allSeries);
    for (var i = 0; i < allSeries.length; i++)
        showTickets(allSeries[i], false, true);
}

function showTickets(series, clear = true, showSeries = false)
{
    if (clear)
        clearTickets();
    curSeries = series;
    if ((typeof series) == "string" && series.includes("series"))
        series = series.replaceAll("series", "");
    var tickets = Object.keys(bobby_tickets["series"+series]);
    for (var i = 0; i < tickets.length; i++)
    {
        if (tickets[i] == "available")
            continue;

        var ticket = document.createElement("div")
        ticket.className = "ticket";

        var series_data = bobby_tickets[("series"+series)];
        var data = series_data[tickets[i]];
        // console.log(data);
        // console.log(tickets);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "owned";
        checkbox.checked = check_list(series + "/" + data.name);

        var theSeries = series;
        checkbox.addEventListener("change", function() {
            updChecklist(this.parentElement.childNodes[1].textContent, this.checked, theSeries);
        });
        ticket.appendChild(checkbox);

        var name = document.createElement("coolfont");
        name.className = "padded";
        name.textContent = data.name;
        name.id = "name";
        ticket.appendChild(name);

        var value = document.createElement("coolfont");
        value.className = "padded";
        value.textContent = "value: " + data.value;
        value.id = "value";
        ticket.appendChild(value);

        var quantity = document.createElement("coolfont");
        quantity.className = "padded";
        quantity.textContent = "quantity: " + data.quantity;
        quantity.id = "quantity";
        quantity.title = "* amount made";
        ticket.appendChild(quantity);

        var trueA = data.deployed;
        if (series_data["available"] == false)
            trueA = false;

        var available = document.createElement("coolfont");
        available.className = "padded";
        available.textContent = (trueA ? "available" : "not available");
        available.id = "available";
        available.title = "* is this ticket still available?"
        ticket.appendChild(available);

        if (showSeries) {
            var seriesText = document.createElement("coolfont");
            seriesText.className = "padded";
            seriesText.textContent = "series: " + series;
            seriesText.id = "series";
            seriesText.title = "* what series this ticket is from?"
            ticket.appendChild(seriesText);
        }
        

        var div1 = document.createElement("div");
        ticket.appendChild(div1);

        // var img = document.createElement("img");
        // img.src = data.image;
        var img = preloadImages.list[data.image];
        img.width = 500;
        ticket.appendChild(img);

        // var div2 = document.createElement("div")
        // ticket.appendChild(div2);

        var container = document.getElementById("tickets");
        container.appendChild(ticket);

        alltickets.push(ticket);

        ticket.defhover = false;
        ticket.defwidth = ticket.style.width;

        ticket.addEventListener('mouseenter', function() {
            this.defhover = true;

            //console.log("hovered" + this.defhover);
        });
          
        ticket.addEventListener('mouseleave', function() {
            this.defhover = false;
            //console.log("not hovered" + this.defhover);
        });


        var spacer = document.createElement("div");
        spacer.className = "spacer";
        // spacer.style.paddingTop = "25px"; //!moved to css stylesheet for animation
        container.appendChild(spacer);

    }
}

function clearTickets(anim = false, ddmenu = undefined)
{
    curSeries = "none";
    alltickets = [];
    var container = document.getElementById("tickets");
    //var elements = container.children;

    //var names = '';

    if (anim)
    {
        for (var i = 0; i < container.children.length; i++) {
            container.children[i].animate(
                [
                    // keyframes
                    {
                        translate: "0 0",
                        scale: "1, 1"
                    },
                    {
                        translate: "-150vw 0",
                        scale: "0, 1"
                    },
                ],
                {
                    // timing options
                    duration: 1000
                },
            );
        }
        ddmenu.disabled = true;
        setTimeout(function()
        {
            for (var i = 0; container.lastChild != undefined; i++) { //i don't know a better way to do this
                    container.removeChild(container.lastChild);
            }
            ddmenu.disabled = false;
        }, 900);

    }
    else
    {
        for (var i = 0; container.lastChild != undefined; i++) { //i don't know a better way to do this
                container.removeChild(container.lastChild);
        }
    }
    
    
}


var ticketImgs = [];
for (var i = 0; i < Object.keys(bobby_tickets).length; i++) //grabbing the ticket images
{
    var a = Object.keys(bobby_tickets)[i]; //the series we're searching
    //console.log(a);
    for (var j = 0; j < Object.keys(bobby_tickets[a]).length; j++)
    {
        var ticket = Object.keys(bobby_tickets[a])[j];
        if (ticket == "available")
            continue;
        ticket = bobby_tickets[a][ticket];
        //console.log(ticket);
        ticketImgs.push(ticket.image);
    }
}
//console.log(ticketImgs);
preloadImages(ticketImgs);
