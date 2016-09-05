/**
 * Created by Administrator on 2016/9/4.
 */
function showPic(whichpic) {
    if (!document.getElementById('holder'))return false;
    var holder = document.getElementById('holder');
    var sourse = whichpic.getAttribute('href');
    holder.setAttribute("src", sourse);
    if (document.getElementById('description')) {
        var description = document.getElementById("description");
        var text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body");
    alert(body_element.childNodes.length);
}

function prepareGallery() {
    if (!document.getElementsByTagName)
        return false;
    if (!document.getElementById)
        return false;
    if (!document.getElementById("gallery"))
        return false;
    var gallery = document.getElementById("gallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}

function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

addLoadEvent(prepareGallery)


