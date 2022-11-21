import { Component, OnInit } from '@angular/core';
import { dataStorage } from './util';

@Component({
  selector: 'app-demo-workerTransableData',
  templateUrl: './demo-workerTransableData.component.html',
  styleUrls: ['./demo-workerTransableData.component.css']
})
export class DemoWorkerTransableDataComponent implements OnInit {

  ngOnInit() {
  }

  do() {
    const worker = new Worker(new URL('./app.worker', import.meta.url));
    worker.postMessage({ type: 'arraybufferList' });
    worker.onmessage = ({ data }) => {
      console.log("耗时:", new Date().getTime() - data.date);
      let bufferList = data.bufferList;
      console.log(bufferList);
    };
  }

  do2() {
    dataStorage.instance().showA()
    const worker = new Worker(new URL('./app.worker', import.meta.url));
    worker.postMessage({ type: 'object' });
    worker.onmessage = ({ data }) => {
      dataStorage.instance().showA()
    };
  }

  do3() {
    console.log('第一个promise');
    this.worker.postMessage({ type: 'lotsAll' });
    this.worker.onmessage = ({ }) => {
      console.log('第一个promise onmessage');
    };
    console.log('第二个promise');
    this.worker.postMessage({ type: 'lotsAll' });
    this.worker.onmessage = ({ }) => {
      console.log('第二个promise onmessage');
    };
  }

  do4() {
    Promise.all([
      new Promise((resolve, reject) => {
        console.log('第一个promise');
        this.worker.postMessage({ type: 'lotsAll' });
        this.worker.onmessage = ({ }) => {
          console.log('第一个promise onmessage');
          resolve(true)
        };
      }),
      new Promise((resolve, reject) => {
        console.log('第二个promise');
        this.worker.postMessage({ type: 'lotsAll' });
        this.worker.onmessage = ({ }) => {
          console.log('第二个promise onmessage');
          resolve(true)
        };
      })
    ]).then(res => {
      console.log('promisAll完成', res)
    })
  }

  do5() {
    this.worker.postMessage({ type: 'tranAndRead' });
    this.worker.onmessage = (data: any) => {
      console.log('测试完成', data);
    };
  }

  worker = new Worker(new URL('./app.worker', import.meta.url));
}
