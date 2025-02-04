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


// function makeTicket(name, series, image, quantity, deployed, value, rotation = 0)
// {
//     return {
//         name: name,
//         series: series,
//         image: "../img/series"+series+"/"+image+".png",
//         quantity: quantity,
//         deployed: deployed,
//         value: value,
//         rotation: rotation
//     }
// }

function bye_ls()
{
    localStorage.clear();
}


var bobby_tickets = vault_bobby_tickets;

var secrets = {
    "s1": {unlocked: false},
    "BILL CLINTON": {unlocked: false}
};

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
var start = false;
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
    if (!start)
    {
        console.log("initializing secrets...");
        start = true;
        if (localStorage.getItem("bobbyco_secrets") != null) {
            var localSecrets = JSON.parse(localStorage.getItem("bobbyco_secrets"));
            var localKeys = Object.keys(localSecrets);
            for (var i = 0; i < localKeys.length; i++)
            {
                secrets[localKeys[i]] = localSecrets[localKeys[i]];
            }
        }
        //console.log(secrets);
        var allSecrets = Object.keys(secrets);
        //console.log(allSecrets.length + " saved secrets found!");
        //console.log(allSecrets);
        //console.log(Object.values(secrets));
        for (var i = 0; i < allSecrets.length; i++)
        {
            console.log(allSecrets[i] + " " + secrets[allSecrets[i]].unlocked);
            if (secrets[allSecrets[i]].unlocked)
                process(allSecrets[i],true);
            var result = document.getElementById("secret_result");
            result.style = "";
            result.textContent = "";
        }
    }
}


function process(code,force = false) {
    var result = document.getElementById("secret_result");
    console.log("processing code \"" + code + "\"....");
    switch (code.toLowerCase())
    {
        case "s1":
            if (!secrets["s1"].unlocked) {
                secrets["s1"].unlocked = true;
                localStorage.setItem("gambling_money",parseFloat(localStorage.getItem("gambling_money"))+500);
                //add_s1();
                result.style = "color:rgb(78, 255, 116); font-weight: 700;";
                result.textContent = "500 bobbium awarded!";                
            }

            break;
        case "e1":
            if (!secrets["BILL CLINTON"].unlocked) {
                secrets["BILL CLINTON"].unlocked = true;
                // localStorage.setItem("gambling_money",parseFloat(localStorage.getItem("gambling_money"))+500);
                add_BILL_CLINTON();
                result.style = "color:rgb(78, 255, 116); font-weight: 700;";
                result.textContent = "BILL CLINTON";                
            }

            break;
        case "bill clinton":
            add_BILL_CLINTON();
    }
    //console.log(secrets);
    localStorage.setItem("bobbyco_secrets", JSON.stringify(secrets));
}

function add_s1() {
    console.log("Added s1");
    var opts = document.getElementById("v3_tickets");
    var opt = document.createElement("option");
        //*<option value="s1">Seasonal Series 1 (s1)</option>
    opt.value = "s1";
    opt.textContent = "Seasonal Series 1 (s1)";
    opts.appendChild(opt);
}
function add_BILL_CLINTON() {
    console.log("Added BILL CLINTON");
    var opts = document.getElementById("seriesDD");
    var sec = document.createElement("optgroup");
    var sep = document.createElement("hr");
    sec.label = "BILL CLINTON";
    var opt = document.createElement("option");
        //*<option value="s1">BILL CLINTON (BILL CLINTON)</option>
    opt.value = "BILL CLINTON";
    opt.textContent = "BILL CLINTON (BILL CLINTON)";
    opts.appendChild(sep);
    opts.appendChild(sec);
    sec.appendChild(opt);
}

function ticketHover(ticket, hover)
{
    if (ticket.canAnimate)
    {
        //console.log(ticket.style.transform);
        if (hover) {
            //console.log("hovering");
            //console.log(ticket);
            //ticket.style.transform = "scaleX(" + ((1.1*ticket.defwidth) - ticket.style.width)/10 + ")";
        }
        else {
            //ticket.style.transform = "scaleX(" + ((ticket.defwidth) - ticket.style.width)/10 + ")";
        }
    }
}

function showAllTickets(clear = true)
{
    if (clear)
        clearTickets();
    var allSeries = Object.keys(bobby_tickets);
    console.log(allSeries);
    for (var i = 0; i < allSeries.length; i++) {
        //console.log("BILL CLINTON");
        if (allSeries[i] == "seriesBILL CLINTON")
            continue;
        showTickets(allSeries[i], false, true);
    }
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

        var ticket = document.createElement("div");
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
        available.title = "* is this ticket still available?";
        ticket.appendChild(available);
        available.style = "color: " + (trueA ? "#21eb5a" : "#b81838") + ";";

        if (showSeries) {
            var seriesText = document.createElement("coolfont");
            seriesText.className = "padded";
            seriesText.textContent = "series: " + series;
            seriesText.id = "series";
            seriesText.title = "* what series this ticket is from?";
            ticket.appendChild(seriesText);
        }
        

        var div1 = document.createElement("div");
        ticket.appendChild(div1);

        // var img = document.createElement("img");
        // img.src = data.image;
        var img = preloadImages.list[data.image];
        if (data.rotation == 0)
            img.width = 500;
        ticket.appendChild(img);
        if (data.rotation == 90)
        {
            img.height = 500;
            
            //img.style = 'transform:rotate(90deg);';
            //img.style = "transform:translate("+((ticket.width/2)-(img.width/2))+"px,0px)";
            ticket.height += 500;
        }
        img.onerror = () => {
            console.log("couldn't load url: " + img.src);
        }

        // var div2 = document.createElement("div")
        // ticket.appendChild(div2);

        var container = document.getElementById("tickets");
        container.appendChild(ticket);

        alltickets.push(ticket);

        ticket.defhover = false;
        ticket.defwidth = ticket.style.width;

        ticket.canAnimate = false;

        ticket.addEventListener("animationstart", function()
        {
            ticket.canAnimate = false;
        }, false);
        ticket.addEventListener("animationend", function()
        {
            ticket.canAnimate = true;
        }, false);

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

function showTicket(ticketData)
{
    var ticket = document.createElement("div");
    ticket.className = "ticket";

    var series_data = bobby_tickets[("series"+ticketData.series)];
    var data = ticketData;//series_data[ticketData.name];
    //console.log(data);
    //console.log(ticketData);
    //console.log(series_data);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "owned";
    checkbox.checked = check_list(ticketData.series + "/" + data.name);

    var theSeries = ticketData.series;
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
    available.title = "* is this ticket still available?";
    ticket.appendChild(available);
    available.style = "color: " + (trueA ? "#21eb5a" : "#b81838") + ";";

    //if (showSeries) {
        var seriesText = document.createElement("coolfont");
        seriesText.className = "padded";
        seriesText.textContent = "series: " + ticketData.series;
        seriesText.id = "series";
        seriesText.title = "* what series this ticket is from?";
        ticket.appendChild(seriesText);
    //}
    

    var div1 = document.createElement("div");
    ticket.appendChild(div1);

    // var img = document.createElement("img");
    // img.src = data.image;
    var img = document.createElement("img");//preloadImages.list[data.image];
    img.src = preloadImages.list[data.image].src;
    if (data.rotation == 0)
        img.width = 500;
    ticket.appendChild(img);
    if (data.rotation == 90)
    {
        img.height = 500;
        
        //img.style = 'transform:rotate(90deg);';
        //img.style = "transform:translate("+((ticket.width/2)-(img.width/2))+"px,0px)";
        ticket.height += 500;
    }
    img.onerror = () => {
        console.log("couldn't load url: " + img.src);
    }

    // var div2 = document.createElement("div")
    // ticket.appendChild(div2);

    var container = document.getElementById("tickets");
    container.appendChild(ticket);

    alltickets.push(ticket);

    ticket.defhover = false;
    ticket.defwidth = ticket.style.width;

    ticket.canAnimate = false;

    ticket.addEventListener("animationstart", function()
    {
        ticket.canAnimate = false;
    }, false);
    ticket.addEventListener("animationend", function()
    {
        ticket.canAnimate = true;
    }, false);

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


var ticketImgs = []; //? preloads all of the images for easy access later.
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
