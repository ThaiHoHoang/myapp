import {DrawingApp } from "./drawapp";
import { Pipe} from "./pipe";
import {Bird} from "./bird";

var canvas : HTMLCanvasElement;
var ctx : CanvasRenderingContext2D;
let y: number;
let x: number;
let drawing = new DrawingApp;
let drawPipe: Pipe;
let drawPipe2: Pipe;
let drawBird: Bird;
let keypress: KeyboardEvent;
let isEnd = false;
let score = 0;
window.onload = () => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
    x = canvas.width;
    drawPipe = new Pipe(x);
    drawPipe2 = new Pipe(x+500);
    drawBird = new Bird(ketThuc);
    document.addEventListener("keydown",onKeyDown);
    function onKeyDown(this: HTMLCanvasElement, evt: KeyboardEvent) {
      keypress = evt;
    }
    // switch (keypress.key) {
    //   case "p": isEnd = false;
    // }
    
    gameloop();
    
    
}
function gameloop() {
    
    if (!isEnd){
        drawing.clearCanvas();
        drawing.drawBackGround(0,0,canvas.width,canvas.height);
        processInput();
        update();
        render();
        requestAnimationFrame(gameloop)
        
    }
}
function processInput() {
    if ( keypress != null) {
        switch(keypress.key) {
            case "u": drawBird.birdInput(true);
            console.log("Play");
        }
        keypress = null;
    }
}

function ketThuc() {
  isEnd = true;
}

function render() {
   drawPipe.drawPipe();
   drawPipe2.drawPipe();
   drawBird.drawBird();
   countScore();
   ctx.font = '20px Arial';
   ctx.fillText('SCORE: '+ score,50,30,300);

}
function update() {
    let isColision = checkColision(drawBird, drawPipe)
        || checkColisionUp(drawBird, drawPipe)
        || checkColision(drawBird, drawPipe2)
        || checkColisionUp(drawBird, drawPipe2);
    if (isColision){
        ketThuc();
    }
    drawPipe2.update();
    drawPipe.update();
    drawBird.update();
    
    
}
function countScore() {  
    if (isEnd == false) {
      score++;
    }
    else {
      ctx.font = "200 Arial";
      ctx.fillText('YOUR SCORE: '+ score,400,250)
    }
}
function name() {
  
}

function checkColision(bird:Bird, pipe: Pipe): boolean {
    let left_pipeird = bird.x;
    let right_pipeird = bird.x + 50;
    let top_pipeird = bird.y;
    let bottom_pipeird = bird.y + 50;
   
    let left_pipe = pipe.x;
    let right_pipe = pipe.x + 60;
    let top_pipe = pipe.y;
    let bottom_pipe = pipe.y + 500;
   
    if (left_pipeird > left_pipe && left_pipeird < right_pipe)
    {
      if (top_pipeird > top_pipe && top_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (left_pipeird > left_pipe && left_pipeird < right_pipe)
    {
      if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (right_pipeird > left_pipe && right_pipeird < right_pipe)
    {
      if (top_pipeird > top_pipe && top_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (right_pipeird > left_pipe && right_pipeird < right_pipe)
    {
      if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    return false;
}

function checkColisionUp(bird:Bird, pipe: Pipe) {
    let left_pipeird = bird.x;
    let right_pipeird = bird.x + 50;
    let top_pipeird = bird.y;
    let bottom_pipeird = bird.y + 50;
   
    let left_pipe = pipe.x;
    let right_pipe = pipe.x + 60;
    let top_pipe = pipe.y - 630;
    let bottom_pipe = pipe.y + 500 - 630;
   
    if (left_pipeird > left_pipe && left_pipeird < right_pipe)
    {
      if (top_pipeird > top_pipe && top_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (left_pipeird > left_pipe && left_pipeird < right_pipe)
    {
      if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (right_pipeird > left_pipe && right_pipeird < right_pipe)
    {
      if (top_pipeird > top_pipe && top_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    if (right_pipeird > left_pipe && right_pipeird < right_pipe)
    {
      if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe)
      {
        return true;
      }
    }
   
    return false;
}