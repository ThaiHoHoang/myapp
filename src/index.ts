let lastTime = window.performance.now();
var time = window.performance.now();
var delta = time - lastTime;
requestAnimationFrame(loop)
function update(time: number,delta: number){
    console.log(time);
    console.log(delta);
}
function loop() {
time = window.performance.now();
delta = time - lastTime;
// processInput();
update(time, delta);
// render();
lastTime = time;
if (time<5000)
var id = requestAnimationFrame(loop)
console.log("Finish " + id.toString());
}