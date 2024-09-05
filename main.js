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
        "available": true,

        "happy bobby": makeTicket("happy bobby", 2, "happy bobby", 24, true, 1),
        "bobby is skeptical": makeTicket("bobby is skeptical", 2, "bobby is skeptical", 24, true, 2),
        "scary bobby": makeTicket("scary bobby", 2, "scary bobby", 24, true, 1),
        "bobby AMALGAMATION": makeTicket("bobby AMALGAMATION", 2, "bobby AMALGAMATION", 24, true, 1),    
    },
    "series3": {
        "available": true,

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

        "COOL AS ICE": makeTicket("COOL AS ICE", "4a", "COOL AS ICE", 6, true, 10),
        "..blobby ticket?": makeTicket("..blobby ticket?", "4a", "blobby", 12, true, 1),
        "king bobby": makeTicket("king bobby", "4a", "king bobby", 12, true, 2),
        "bobby died": makeTicket("bobby died", "4a", "bobby died", 12, true, 1),
        "NOT-BOBBY": makeTicket("NOT-BOBBY", "4a", "NOT BOBBY", 12, true, 1),
        "DRAGGED IN": makeTicket("DRAGGED IN", "4a", "DRAGGED IN", 6, true, 5),
        "3D BOBBY": makeTicket("3D BOBBY", "4a", "3D BOBBY", 6, true, 5),
        "menace bobby": makeTicket("menace bobby", "4a", "menace bobby", 12, true, 2),
        "tekcit ybbob": makeTicket("tekcit ybbob", "4a", "tekcit ybbob", 12, true, 1),
        "OBSERVED": makeTicket("OBSERVED", "4a", "OBSERVED", 10, true, 3),
        "chunky bobby": makeTicket("chunky bobby", "4a", "chunky bobby", 12, true, 2),
        "traumatized bobby": makeTicket("traumatized bobby", "4a", "traumatized bobby", 12, true, 2),
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
        if (curSeries != "none")
            showTickets(curSeries);
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

function export_list()
{
    save(checklist.toString, 'tickets-checklist.txt');
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
                checklist = (""+(event.target.result)).split(",");
                update_all();
                save_list();
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
    }
}


function showTickets(series)
{
    clearTickets();
    curSeries = series;
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
        available.textContent = "available: " + (trueA ? "yes" : "no");
        available.id = "available";
        available.title = "* is this ticket still available?"
        ticket.appendChild(available);
        

        var div1 = document.createElement("div");
        ticket.appendChild(div1);

        var img = document.createElement("img");
        img.src = data.image;
        img.width = 500;
        ticket.appendChild(img);

        // var div2 = document.createElement("div")
        // ticket.appendChild(div2);

        var container = document.getElementById("tickets");
        container.appendChild(ticket);

        alltickets.push(ticket);


        // var spacer = document.createElement("div");
        // spacer.className = "spacer";
        // container.appendChild(spacer);

    }
}

function clearTickets()
{
    curSeries = "none";
    alltickets = [];
    var container = document.getElementById("tickets");
    //var elements = container.children;

    //var names = '';
    for(var i = 0; container.lastChild != undefined; i++) {
        container.removeChild(container.lastChild);
    }
}

