import { Component, OnInit } from '@angular/core';
import { dataStorage } from './util';

@Component({
  selector: 'app-demo-workerTransableData',
  templateUrl: './demo-workerTransableData.component.html',
  styleUrls: ['./demo-workerTransableData.component.css']
})
export class DemoWorkerTransableDataComponent implements OnInit {

  constructor() { }

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

}
