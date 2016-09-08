/**
 * Created by Administrator on 2016/9/8.
 */
function prepareSlideShow() {
    if (!document.getElementById("preview"))return false;
    if (!document.getElementById("linklist"))return false;
    var preview = document.getElementById('preview');
    preview.style.position = "absolute";
    var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveMessage("preview", 0, 50, 10);
    }
    links[1].onmouseover = function () {
        moveMessage("preview", 0, 100, 10);
    }
    links[2].onmouseover = function () {
        moveMessage("preview", 0, 200, 10);
    }
}

addLoadEvent(prepareSlideShow);