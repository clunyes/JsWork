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