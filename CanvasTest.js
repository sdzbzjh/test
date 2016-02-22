/**
 * Created by Administrator on 2016/2/22.
 */
function draw(id){
    var canvas=document.getElementById(id);
    if(canvas==null){
        return false;
    }
    var context=canvas.getContext("2d");
    context.fillStyle="#EEEEFF";
    context.fillRect(0,0,400,300);
    var n=0;
    var dx=150;
    var dy=150;
    var s=100;
    context.beginPath();
    context.fillStyle="rbg(100,255,100)";
    context.strokeStyle="rbg(0,0,100)";
    var dig=Math.PI/15*11;
    for(var i=0;i<30;i++){
        var x=Math.sin(i*dig);
        var y=Math.cos(i*dig);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}