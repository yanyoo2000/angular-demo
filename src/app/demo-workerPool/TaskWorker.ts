export class TaskWorker extends Worker {
    constructor(notifyAvailable: any, workerParam: any) {
        super(workerParam);
        this.notifyAvailable = notifyAvailable;//主线程的回调,通知主线程可以接收任务
        this.setAvailable();
    }

    //设为可用状态
    setAvailable() {
        this.available = true;
        this.resolve = null;
        this.reject = null;
        this.notifyAvailable();
    }

    dispatch({ resolve, reject, postMessageArgs }) {
        this.available = false;

        this.onmessage = ({ data }) => {
            resolve(data);
            this.setAvailable();
        };

        this.onerror = (e) => {
            reject(e);
            this.setAvailable();
        };

        this.postMessage(...postMessageArgs);
    }

    available = false;
    resolve = null;
    reject = null;
    notifyAvailable: any
}