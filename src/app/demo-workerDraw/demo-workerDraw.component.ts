// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-workerDraw',
  templateUrl: './demo-workerDraw.component.html',
  styleUrls: ['./demo-workerDraw.component.css']
})
export class DemoWorkerDrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doDrawHevay() {
    var canvas = document.getElementById("canvas1");
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

    function draw() {
      let a = 0
      for (let index = 0; index < 100000000; index++) {
        a = a + index
      }
      // 用带透明度的矩形代替清空
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 添加速率
      ball.x += ball.vx;
      ball.y += ball.vy;

      // 添加边界
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      window.requestAnimationFrame(draw);
      ball.draw();
    }
    window.requestAnimationFrame(draw);
    ball.draw();
  }

  doDrawEasy() {
    var canvas = document.getElementById("canvas2");
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

    function draw() {

      // 用带透明度的矩形代替清空
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      // 添加速率
      ball.x += ball.vx;
      ball.y += ball.vy;
      // 添加边界
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      window.requestAnimationFrame(draw);
      ball.draw();
    }
    window.requestAnimationFrame(draw);
    ball.draw();
  }

  drawWithWorkerAndOffscreenCanvas() {

    const worker = new Worker(new URL('./app.worker', import.meta.url));
    setInterval(() => {
      worker.postMessage({ data: 1 });
    }, 16.7)
    worker.onmessage = ({ data }) => {
      let bitmapOne = data.ImageBitmap;
      var htmlCanvas = document.getElementById("canvas3");
      let canvasContent = htmlCanvas.getContext('2d')
      canvasContent.drawImage(bitmapOne, 0, 0);
    };
  }
}
