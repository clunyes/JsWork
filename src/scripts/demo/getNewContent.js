/**
 * Created by Administrator on 2016/9/7.
 */
function getNewContent() {
    var request = getHttpObject();
    if (request) {
        request.open("get", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                alert('response received');
                var para = document.createElement("p");
                var txt = document.createTextNode(request.response);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert("sorry,browser don't support XmlHttprequest");
    }
    alert('function done');
}
addLoadEvent(getNewContent);