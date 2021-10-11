export class Bird {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public x:number;
    public y:number;
    private g:number;
    private count: number;
    private isJump: boolean;
    private ketThuc: () => void;

    constructor (ketThuc: () => void) {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        this.canvas = canvas;
        this.context = context;
        this.y = 0;
        this.x = 100;
        this.g = 1;
        this.isJump = false;
        this.count = 0;
        this.ketThuc = ketThuc;
    }
    public drawBird() {
        let context = this.context;
        var img = new Image();
        img.src = '../src/img/bird.png';
        context.drawImage(img,this.x,this.y,50,50);
    }
    public update() {
        if (this.y<=this.canvas.height-(this.canvas.height/10)) {
            this.y += this.g;
            this.g *=1.07;
            if (this.isJump == true){ 
                this.g= - 5;

                if (this.count <10){
                    this.count++;
                }
                else {
                    this.count = 0;
                    this.isJump = false;
                    this.g = 1;
                }
            }

        }
        else {
            this.ketThuc();
        }
    }

    public birdInput(isJump: boolean) {
        this.isJump = isJump;
        this.count = 0;
    }    
}