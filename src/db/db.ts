import Dexie, { Table } from "dexie";

export interface PersonInfo {
    id?: number;
    name: string;
    data: ArrayBuffer
}

export class AppDB extends Dexie {

    personInfos!: Table<PersonInfo, number>

    constructor() {
        super('ngdexieliveQuery');
        this.version(3).stores({
            personInfos: '++id'
        });
        this.on('populate', () => this.populate());
    }

    async populate() {
        let buffer = new ArrayBuffer(10000000)
        await db.personInfos.bulkAdd([
            {
                name: '小明',
                data: buffer
            },
            {
                name: '小黄',
                data: buffer

            },
            {
                name: '小白',
                data: buffer
            },
        ]);
    }

    async resetDatabase() {
        await db.transaction('rw', 'personInfos', () => {
            this.personInfos.clear()
            this.populate();
        });
    }
}

export const db = new AppDB();