import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, PersonInfo } from 'src/db/db';

@Component({
  selector: 'app-demo-workerDexie',
  templateUrl: './demo-workerDexie.component.html',
  styleUrls: ['./demo-workerDexie.component.css']
})
export class DemoWorkerDexieComponent implements OnInit {
  constructor() {
    this.worker = new Worker(new URL('./app.worker', import.meta.url));
  }
  ngOnInit() {
  }

  addPerson(name = this.personName) {
    let a = new Date().getTime()
    db.personInfos.add({
      name: name,
      data: new ArrayBuffer(this.size)
    }).then(() => {
      console.log('主线程向indexDB填入' + this.size + '长度的arraybuffer数据耗时', new Date().getTime() - a);
    })
  }

  async resetDatabase() {
    await db.resetDatabase();
  }

  identifyPerson(index: number, list: PersonInfo) {
    return `${list.name}`
  }

  personInfos$ = liveQuery(() => db.personInfos.toArray());
  worker: any
  personName = '小黑'
  size = 100000000
  count = 1

  addCountPersonWorker() {

    for (let index = 0; index < this.count; index++) {
      let personDara = {
        name: 'Worker创建的人' + index,
        data: new ArrayBuffer(this.size)
      }
      this.worker.postMessage({ date: new Date().getTime(), data: personDara }, [personDara.data]);
    }
    this.worker.onmessage = ({ data }: { data: any }) => {
      let res = data.status
      console.log(res);
      console.log(`使用worker的整个流程总耗时为${new Date().getTime() - data.date}`);
    };
  }
}
