function subpage(dir)
{
    if (dir !== "") {
        dir = "/" + dir;
    }
    window.location.href = window.location.origin + dir;
}