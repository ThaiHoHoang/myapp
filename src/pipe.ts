import { Bird } from "./bird";
export class  Pipe {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    private a : number;
    private giatoc: number;
        
    constructor(x: number) {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        this.canvas = canvas;
        this.context = context;
        this.y = this.geRandom();
        this.x = x;
        this.a = 1;
        this.giatoc = 1/1200
    }

    private geRandom() : number {
        return Math.floor(Math.random()*300+150);
    }
    private drawPipeBot() {
        let context = this.context;
        var img = new Image();
        img.src = '../src/img/ongduoi.png';
        context.drawImage(img,this.x,this.y,60,500);
    }
    private drawPipeTop() {
        let context = this.context;
        var img = new Image();
        img.src = '../src/img/ongtren.png';
        context.drawImage(img,this.x,this.y - 630,60,500);
    }
    public drawPipe() {
        this.drawPipeBot();
        this.drawPipeTop();
    }
    public update() {
        if(this.x >= 0) {
            this.x -= this.a*5;
            this.a += this.giatoc;

        } 
        else {
            this.x = this.canvas.width;
            this.y = this.geRandom();
        }
    }
}
