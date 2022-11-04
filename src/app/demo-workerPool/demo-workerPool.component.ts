import { Component, OnInit } from '@angular/core';
import { WorkerPool } from './WorkerPool';

@Component({
  selector: 'app-demo-workerPool',
  templateUrl: './demo-workerPool.component.html',
  styleUrls: ['./demo-workerPool.component.css']
})
export class DemoWorkerPoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  do() {
    const totalFloats = 100000000;
    const numTasks = 20;
    const floatsPerTask = totalFloats / numTasks;

    const pool = new WorkerPool(4, './worker.js');

    let arrayBuffer = new SharedArrayBuffer(4 * totalFloats);

    let view = new Float32Array(arrayBuffer);
    for (let i = 0; i < totalFloats; ++i) {
      view[i] = Math.random();
    }

    let promiseList = [];
    for (let i = 0; i < totalFloats; i += floatsPerTask) {
      promiseList.push(
        pool.enqueue({
          startIdx: i,
          endIdx: i + floatsPerTask,
          arrayBuffer: arrayBuffer
        })
      );
    }

    Promise.all(promiseList)
      .then((partialSums) => partialSums.reduce((x, y) => x + y))
      .then(console.log);

  }
}
