export class DrawingApp {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    constructor() {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        this.canvas = canvas;
        this.context = context;
    }

    public drawBird(x1 : number, y1 : number, w : number, h : number) {
        let context = this.context;
        var img = new Image();
        img.src = '../src/img/bird.png';
        context.drawImage(img,x1,y1,w,h);
        
    }
    public drawBackGround(x1 : number, y1 : number, w : number, h : number) {
        let context = this.context;
        var img = new Image();
        img.src = '../src/img/nenchinh.png';
        context.drawImage(img,x1,y1,w,h);
        
    }

    public clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}