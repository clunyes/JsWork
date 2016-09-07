/**
 * Created by Administrator on 2016/9/7.
 */
window.onload = function () {
    var testdiv = document.getElementById('testdiv');
    var para = document.createElement("p");
    // var info = "nodeName; ";
    // info += para.nodeName;
    // info += " nodeType: ";
    // info += para.nodeType;
    // alert(info);
    var text1 = document.createTextNode("This is ");
    para.appendChild(text1);
    var emphasis = document.createElement("em");
    var text2 = document.createTextNode("my");
    emphasis.appendChild(text2);
    para.appendChild(emphasis);
    var text3 = document.createTextNode(" content");
    para.appendChild(text3);
    testdiv.appendChild(para);
}

