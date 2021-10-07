// import {DrawingApp } from "./drawapp";

var canvas : HTMLCanvasElement;
var ctx : CanvasRenderingContext2D;
var image = new Image();
image.src = '/img/bird.png';
function gameloop() {
    requestAnimationFrame(gameloop)
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,2000,1000);
    ctx.drawImage(image,0,0);
    
}
window.onload = () => {
    // image = <HTMLImageElement> document.getElementById('source');
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
    gameloop();
}
// let drawing = new DrawingApp();
// var x = 0;
// var y = 20;
// var z = 490;

// // requestAnimationFrame(loop)
// function loop() {
// // drawing.clearCanvas();
// drawing.draw(x,20,x,40);
// if (x<z) {
//     x++;
// }
// else {
//     x=0;
// }
 
// requestAnimationFrame(loop)
// console.log(x);
// }

