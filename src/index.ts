import {DrawingApp } from "./drawapp";
import { DrawPipe} from "./pipe"

var canvas : HTMLCanvasElement;
var ctx : CanvasRenderingContext2D;
var event: KeyboardEvent;
let y: number;
let x: number;
let g: number;
let drawing = new DrawingApp;
let drawPipe: DrawPipe;
let drawPipe2: DrawPipe;
let isJump = false;
let count = 0;

function gameloop() {
    drawing.clearCanvas();
    ctx.fillStyle = '#8FBC8F';
    ctx.fillRect(0,0,2000,5000);
    drawing.drawBackGround(0,0,canvas.width,canvas.height);
    processInput();
    update();
    render();
    requestAnimationFrame(gameloop)
}
window.onload = () => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
    y = 0;
    x = canvas.width;
    g = 1;
    drawPipe = new DrawPipe(x);
    drawPipe2 = new DrawPipe(x+500);
    document.addEventListener("keydown",onKeyDown);
    gameloop();
}

function onKeyDown(this: HTMLCanvasElement, evt: KeyboardEvent) {
    console.log("Received event!");
    event = evt;
}

function processInput() {
    if (event != null) {
        switch(event.key){
            case "u":
                isJump = true;
        }
        event = null;
    }
}

function render() {
   drawPipe.drawPipe();
    drawPipe2.drawPipe();
    drawing.drawBird(50,y, 60,50);
}
function update() {
    drawPipe2.update();
    drawPipe.update();
    if(y<=canvas.height ) {
        
        if (isJump == true) {
            if (count < 10) {
                console.log("Bird jumped! count: " + count.toString());
                y -= g*7;
                count++;
            }
            else {
                count = 0;
                isJump = false;
            }
        }
        else {
            y += g*5;
        }
    }
    else {
        y = 0;
    }
}