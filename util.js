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