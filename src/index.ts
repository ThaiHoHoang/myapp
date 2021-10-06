import {DrawingApp } from "./drawapp";


let drawing = new DrawingApp();
// drawing.clearCanvas();
// drawing.draw(0,0,100,100);

let lastTime = window.performance.now();
var time = window.performance.now();
var delta = time - lastTime;
var x = 0;
var y = 20;
var z = 490;

requestAnimationFrame(loop)


function update(time: number,delta: number){

}
function loop() {
drawing.clearCanvas();

// processInput();
// update(time, delta);
// render();

drawing.draw(x,20,x,40);
if (x<z) {
    x++;
}
else {
    x=0;
}
 
requestAnimationFrame(loop)
console.log(x);
console.log(y);
}
