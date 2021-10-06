export class DrawingApp {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    
    constructor() {
        let canvas = document.getElementById('canvas') as
                     HTMLCanvasElement;
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'red';
        context.lineWidth = 1;
    
        this.canvas = canvas;
        this.context = context;
    }

    public draw(x1 : number, y1 : number , x2: number, y2: number) {
        let context = this.context;
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2, y2);
        context.stroke();

        context.closePath();
    }

    public clearCanvas() {
        this.context
            .clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
