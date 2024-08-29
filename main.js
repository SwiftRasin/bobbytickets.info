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
        "fancy bobby": makeTicket("fancy bobby", 3, "fancy bobby", 12, true, 1),
        "robby": makeTicket("robby", 3, "robby", 12, true, 1),
    }
}

function showTickets(series)
{
    clearTickets();
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

        var name = document.createElement("coolfont")
        name.textContent = data.name;
        name.id = "name";
        ticket.appendChild(name);

        var div1 = document.createElement("div")
        ticket.appendChild(div1);

        var img = document.createElement("img")
        img.src = data.image;
        img.width = 500;
        ticket.appendChild(img);

        var container = document.getElementById("tickets")
        container.appendChild(ticket);

    }
}

function clearTickets()
{
    var container = document.getElementById("tickets")
    //var elements = container.children;

    //var names = '';
    for(var i = 0; container.lastChild != undefined; i++) {
        container.removeChild(container.lastChild);
    }
}

