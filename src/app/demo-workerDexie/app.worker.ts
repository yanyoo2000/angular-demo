/// <reference lib="webworker" />

import { db } from "src/db/db";

addEventListener('message', ({ data }) => {
    let a = new Date().getTime()
    addPerson(data.data.name, data.data.data).then(() => {
        console.log(`向indexDB总写入一个长度为 ${data.data.data.byteLength} 的arraybuffer的耗时为 ${new Date().getTime() - a}`);
        postMessage({ status: 'success', date: data.date });
    })
});


async function addPerson(name: any, data: any) {
    await db.personInfos.add({
        name: name,
        data: data
    })
}