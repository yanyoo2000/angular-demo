
/// <reference lib="webworker" />

//@ts-ignore
var canvas = new OffscreenCanvas(400, 400);
let ctx = canvas.getContext('2d')

var ball = {
    x: 100,
    y: 100,
    vx: 4,
    vy: 3,
    radius: 25,
    color: 'blue',
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};


addEventListener('message', ({ data }) => {

    function draw() {
        let a = 0
        for (let index = 0; index < 100000000; index++) {
            a = a + index
        }
        // 用带透明度的矩形代替清空
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }

    }
    draw()
    ball.draw();

    var bitmapOne = canvas.transferToImageBitmap();
    postMessage({ ImageBitmap: bitmapOne }, [bitmapOne]);
});
