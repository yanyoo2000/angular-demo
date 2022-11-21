
/// <reference lib="webworker" />

import { A, dataStorage } from "./util";



addEventListener('message', ({ data }) => {

  switch (data.type) {
    case 'arraybufferList':
      let bufferList = []

      for (let index = 0; index < 10; index++) {
        bufferList.push(new ArrayBuffer(100000000))
      }
      postMessage({ bufferList: bufferList, date: new Date().getTime() }, bufferList);
      break
    case 'object':
      dataStorage.instance().a = new A()
      dataStorage.instance().showA()
      postMessage({});
      break
    case 'lotsAll':
      postMessage({});
      break
    case 'tranAndRead':
      let tranAndRead_testData = new ArrayBuffer(100000000)
      setInterval(() => {
        console.log(tranAndRead_testData);
      }, 1000)
      setTimeout(() => {
        postMessage(tranAndRead_testData, [tranAndRead_testData]);
        // tranAndRead_testData = new ArrayBuffer(999)
      }, 5000);
      break
  }

});
