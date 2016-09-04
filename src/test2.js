/**
 * Created by Administrator on 2016/9/4.
 */
function square(num) {
    total = num * num;
    return total;
}
var total = 50;
var number = square(10);
// alert(total)
//==================
var num = 7.561;
var num = Math.round(num);
// alert(num);
var current_date = new Date();
var hour = current_date.getHours();
// alert(current_date);
// alert(hour);
//=====================
var paras = document.getElementsByTagName('p');
for (var i = 0; i < paras.length; i++) {
    alert(paras[i].getAttribute('title'));
}