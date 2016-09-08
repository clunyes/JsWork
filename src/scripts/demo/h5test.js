/**
 * Created by Administrator on 2016/9/8.
 */
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(120, 32);
        ctx.bezierCurveTo(120, 36.4, 116.4, 40, 112, 40);
        ctx.lineTo(8, 40);
        ctx.bezierCurveTo(3.6, 40, 0, 36.4, 0, 32);
        ctx.lineTo(112, 0);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2.0;
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.stroke();
    }
}

addLoadEvent(draw);