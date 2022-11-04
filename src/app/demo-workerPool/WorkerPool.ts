import { TaskWorker } from "./TaskWorker";

export class WorkerPool {
    constructor(poolSize: number, workerUrl: string) {
        for (let i = 0; i < poolSize; ++i) {
            this.workers.push(
                new TaskWorker(() => this.dispatchIfAvailable(), new URL('./app.worker', import.meta.url)));
        }
    }

    dispatchIfAvailable() {
        if (!this.taskQueue.length) {
            return;
        }
        for (const worker of this.workers) {
            if (worker.available) {
                let a = this.taskQueue.shift();
                worker.dispatch(a);
                break;
            }
        }
    }

    close() {
        for (const worker of this.workers) {
            worker.terminate();
        }
    }

    taskQueue = [];
    workers: TaskWorker[] = [];
}