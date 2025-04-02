function makeTicket(name, series, image, quantity, deployed, value, rotation = 0)
{
    return {
        name: name,
        series: series,
        image: "../img/series"+series+"/"+image+".png",
        quantity: quantity,
        deployed: deployed,
        value: value,
        rotation: rotation
    }
}
var vault_bobby_tickets = {
    "seriesBILL CLINTON": {
        "available": false,

        "BILL CLINTON": makeTicket("BILL CLINTON", "BILL CLINTON", "BILL CLINTON", 0, false, 3),
        
    },
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
        "reverse bobby": makeTicket("reverse bobby", "4a", "tekcit ybbob", 24, true, 1),
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
        "available": false,

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
    "seriess1": {
        "available": false,

        "elf bobby": makeTicket("elf bobby", "s1", "elf bobby", 24, true, 1),
        "SSK": makeTicket("santa bobby, sinterklaas bobby, & krampus bobby", "s1", "3WAY SSK", 12, true, 10),
        "gingerbread bobby": makeTicket("gingerbread bobby", "s1", "gingerbread bobby", 24, true, 3),
        "S&CAIjr": makeTicket("snowman bobby & COOL AS ICE jr", "s1", "snowman bobby & COOL AS ICE jr", 12, true, 5),
        "present bobby": makeTicket("present bobby", "s1", "present bobby", 24, true, 2),
        "scrooge": makeTicket("scrooge bobby", "s1", "scrooge bobby", 24, true, 3),
        "tonguestuck": makeTicket("tonguestuck", "s1", "tonguestuck", 24, true, 4, 90),
        "icefishing": makeTicket("icefishing", "s1", "icefishing", 24, true, 2)
        
    },
    "seriese1": {
        "available": true,

        "Gibbon Falls": makeTicket("Gibbon Falls", "e1", "Gibbon Falls", 36, true, 3),
        "Graceland": makeTicket("Graceland", "e1", "Graceland", 36, true, 3),
        "Honolulu": makeTicket("Hololulu", "e1", "Honolulu", 36, true, 3),
        "Los Angeles": makeTicket("Los Angeles", "e1", "Los Angeles", 36, true, 3),
        "Mount Rushmore": makeTicket("Mount Rushmore", "e1", "Mount Rushmore", 36, true, 3),
        "New York": makeTicket("New York", "e1", "New York", 36, true, 3),
        "the Grand Canyon": makeTicket("the Grand Canyon", "e1", "the Grand Canyon", 36, true, 3),
        "the Washington Monument": makeTicket("the Washington Monument", "e1", "the Washington Monument", 36, true, 3)
        
    },
    "series5b": {
        "available": true,

        "alien bobby": makeTicket("alien bobby", "5b", "alien bobby", 48, true, 3),
        "bald bobby": makeTicket("bald bobby", "5b", "bald bobby", 48, true, 1),
        "biker bobby": makeTicket("biker bobby", "5b", "biker bobby", 24, true, 10),
        "bob": makeTicket("bob", "5b", "bob", 48, true, 1),
        "boxing bobby": makeTicket("boxing bobby", "5b", "boxing bobby", 48, true, 3),
        "COLD AS ICE": makeTicket("COLD AS ICE", "5b", "COLD AS ICE", 32, true, 5),
        "cowboy bobby": makeTicket("cowboy bobby", "5b", "cowboy bobby", 48, true, 3),
        "draw your own": makeTicket("draw your own", "5b", "draw your own", 48, true, "_"),
        "irish bobby": makeTicket("irish bobby", "5b", "irish bobby", 48, true, 2),
        "mail bobby": makeTicket("mail bobby", "5b", "mail bobby", 48, true, 1),
        "MC bobby": makeTicket("MC bobby", "5b", "MC bobby", 48, true, 3),
        "officer bobby": makeTicket("officer bobby", "5b", "officer bobby", 48, true, 2),
        "pirate bobby": makeTicket("pirate bobby", "5b", "pirate bobby", 48, true, 2),
        "robobby": makeTicket("robobby", "5b", "robobby", 48, true, 3),
        "scared bobby": makeTicket("scared bobby", "5b", "scared bobby", 48, true, 1),
        "skater bobby": makeTicket("skater bobby", "5b", "skater bobby", 24, true, 10),

    }
}
function randomTicket(exclude = ["seriesBILL CLINTON"])
{
    var allSeries = Object.keys(vault_bobby_tickets);
    var theTickets = [];
    for (var i = 0; i < allSeries.length; i++) {
        //console.log("BILL CLINTON");
        var isExcluded = false;
        for (var j = 0; j < exclude.length; j++)
        {
            console.log(allSeries[i]);
            console.log(exclude[j]);
            if (allSeries[i] == exclude[j]) {
                console.log("found blacklisted series. EXCLUDE!");
                isExcluded = true;
            }
        }
        if (isExcluded)
            continue;
        
        // showTickets(allSeries[i], false, true);
        var ticketsInSeries = Object.keys(vault_bobby_tickets[allSeries[i]]);
        for (var k = 0; k < ticketsInSeries.length; k++)
        {
            if (ticketsInSeries[k] == "available")
                continue;
            theTickets.push(vault_bobby_tickets[allSeries[i]][ticketsInSeries[k]]);
        }
        
    }
    //console.log(theTickets);
    return theTickets[Math.floor(Math.random() * theTickets.length)];
}