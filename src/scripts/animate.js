/**
 * Created by Administrator on 2016/9/7.
 */
function positionMessage() {
    if (!document.getElementById('message'))return false;
    var elem = document.getElementById('message');
    elem.style.position = "absolute";
    elem.style.top = "100px";
    elem.style.left = "50px";
    moveMessage("message", 200, 200, 20);
    if (!document.getElementById('message2'))return false;
    var elem = document.getElementById('message2');
    elem.style.position = "absolute";
    elem.style.top = "500px";
    elem.style.left = "250px";
    moveMessage("message2", 1000, 800, 20);
}

function moveMessage(elementId, final_x, final_y, interval) {
    var elem = document.getElementById(elementId);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveMessage('" + elementId + "','" + final_x + "','" + final_y + "','" + interval + "')";
    elem.movement = setTimeout(repeat, interval);
}

addLoadEvent(positionMessage);