/**
 * Created by Administrator on 2016/9/1.
 */
//自我提醒：有注释是好事
/**
 * 多行注释
 */
var mood = 'happy';
var age = 'old burden';
var MOOD;
var names = ['zk', 'lxx', 'lq'];
var beatles = Array('first', 'second', 'third');
beatles[0] = names[2];
//=========================
var zhaokang = Object();
zhaokang.name = 'zhaokang';
zhaokang.age = 28;
zhaokang.sex = '男'

var zhaokang = {name: 'zhaokang', age: 28, sex: '男'};
// alert(zhaokang.name + ' ' + zhaokang.age + ' ' + zhaokang.sex);

//=======================
// alert('20' + 20)

//=======================
// if (1 > 2) {
//     alert('this world is changed')
// } else {
//     alert('ok, we know it')
// }

//=======================

var myMood = 'happy';
var yourMood = 'sad';
// if (myMood != yourMood) {
//     alert('our mood is different');
// }
var num = 6;
if (num > 5 && num < 10) {
    // alert("the number is right");
}
if (num > 10 || num < 5) {
    // alert("the number is right");
}
//=========================
// var count = 1;
// while (count < 10) {
//     alert(count);
//     count++;
// }
//=======================
// for (var count = 1; count < 11; count++) {
//     alert(count);
// }
//=============================
// var kangshens = Array('zk', 'zk2', 'zk3', 'zk4', 'zk5');
// for (var i = 0; i < kangshens.length; i++) {
//     alert(kangshens[i]);
// }
//===========================
function shout() {
    var kangshens = Array('zk', 'zk2', 'zk3', 'zk4', 'zk5');
    for (var i = 0; i < kangshens.length; i++) {
        alert(kangshens[i]);
    }
}

// shout();

function multiply(num1, num2) {
    var total = num1 * num2;
    alert(total);
}

// multiply(2, 9);
//====================