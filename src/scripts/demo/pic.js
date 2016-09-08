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

function prepareHolder() {
    var holder = document.createElement("img");
    holder.setAttribute("id", "holder");
    holder.setAttribute("src", "images/holder.jpg");
    holder.setAttribute("alt", "gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desText = document.createTextNode("choose an image");
    description.appendChild(desText);

    // document.body.appendChild(holder);
    // document.body.appendChild(description);

    var gallery = document.getElementById("gallery");
    insertAfter(holder, gallery);
    insertAfter(description, holder);
}

function insertAfter(newElement, target) {
    var parent = target.parentNode;
    if (parent.lastChild == target) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, target.nextSibling);
    }
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


addLoadEvent(prepareGallery)
addLoadEvent(prepareHolder)


