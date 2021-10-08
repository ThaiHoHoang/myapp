export class DrawingApp {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    constructor() {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'red';
        context.fillStyle = 'dark';
        context.lineWidth = 1;
    
        this.canvas = canvas;
        this.context = context;
    }

    public drawBird(x1 : number, y1 : number) {
        let context = this.context;
        var img = new Image();
        img.src = './img/bird.png';
        img.onload;
        context.drawImage(img,x1,y1);
        
    }
    public drawPice(x1 : number, y1 : number) {
        let context = this.context;
        var img = new Image();
        img.src = './img/ongduoi.png';
        img.onload;
        context.drawImage(img,x1,y1);
        
    }

    public clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}