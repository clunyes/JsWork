/**
 * Created by Administrator on 2016/9/7.
 */
function getHttpObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function () {
            try {
                return new activexobject("Msxml2.xmlhttp.6.0");
            } catch (e) {
            }
            try {
                return new activexobject("Msxml2.xmlhttp.3.0");
            } catch (e) {
            }
            try {
                return new activexobject("Msxml2.xmlhttp");
            } catch (e) {
            }
            return false;
        }
    }
    return new XMLHttpRequest();
}