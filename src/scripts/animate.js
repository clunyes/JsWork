/**
 * Created by Administrator on 2016/9/7.
 */
function positionMessage() {
    var elem = document.getElementById('message');
    elem.style.position = "absolute";
    elem.style.top = "100px";
    elem.style.left = "50px";
}

function moveMessage() {
    var elem = document.getElementById('message');
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 500) {
        return true;
    }
    if (xpos < 200) {
        xpos++;
    }
    if (xpos > 200) {
        xpos--;
    }
    if (ypos < 500) {
        ypos++;
    }
    if (ypos > 500) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var movement = setTimeout("moveMessage()", 10);
}

addLoadEvent(positionMessage);
addLoadEvent(moveMessage);