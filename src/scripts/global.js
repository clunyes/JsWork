/**
 * Created by Administrator on 2016/9/7.
 */
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

function insertAfter(newElement, target) {
    var parent = target.parentNode;
    if (parent.lastChild == target) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, target.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassNmae = element.className;
        newClassNmae += " "
        newClassNmae += value;
        element.className = newClassNmae;
    }
}