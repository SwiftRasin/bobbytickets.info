console.log(path);
function funRedirText()
{
    switch (Math.floor(Math.random() * 10))
    {
        case 0: return "redirecting..";
        case 1: return "bobby is waiting.";
        case 2: return "wait just a second...";
        case 3: return "the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end";
        case 4: return "bobby is redirecting you.";
        case 5: return "robby is disappointed.";
        case 6: return "this page wasn't good enough; redirecting you to a better one.";
        case 7: return "According to all known laws of aviation, there is no way a bee should be able to fly.";
        case 8: return "bobbyco loves you.";
        case 9: return "You may know everything I'm going to do, but that doesn't help because I know everything YOU'RE going to do! STRANGE, ISN'T IT?";
    }
}
function redirElement()
{
    document.getElementById("redir").textContent = funRedirText();
}
function redir()
{
    var newPage = "";
    var slashName = path.replace("index.html", "");
    var subName = slashName.replace("/", "").replace("/", "");;
    console.log(subName);
    newPage = subName + "/" + subName + ".html";
    subpage(newPage);
}