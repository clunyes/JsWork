/**
 * Created by Administrator on 2016/9/4.
 */
var body_element = document.getElementsByTagName("body");
function showPic(whichpic) {
    var sourse = whichpic.getAttribute('href');
    var holder = document.getElementById('holder');
    holder.setAttribute("src", sourse);
    alert(body_element.nodeType);
    // var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    // alert(countBodyChildren())
    // alert(description.childNodes[0].nodeValue);
    var text = whichpic.getAttribute("title");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body");
    alert(body_element.childNodes.length);
}



