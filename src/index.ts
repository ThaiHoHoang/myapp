import {DrawingApp } from "./drawapp";

var canvas : HTMLCanvasElement;
var ctx : CanvasRenderingContext2D;
function gameloop() {
    drawing.clearCanvas();
    ctx.fillStyle = '#8FBC8F';
    ctx.fillRect(0,0,2000,5000); 
    render();
    requestAnimationFrame(gameloop)
}
window.onload = () => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
    gameloop();
}
let drawing = new DrawingApp();


canvas = document.getElementById('canvas') as HTMLCanvasElement;
ctx = canvas.getContext('2d');
let y = 0;
let x = 450;
let g = 1;

function render() {
    drawing.drawPice(x,350);
    drawing.drawBird(50,y);
    if(y<=500 || x >= -10) {
        x -= g*3;
        y += g*5;
    }
    else {
        x = 450;
        y = 0;
    }    
}
