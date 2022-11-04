async function asyncPool(limitCount: number, params: any[], asyncFnc: any) {
    let pool: Promise<any>[] = []
    let executing: Promise<any>[] = []
    for (const param of params) {
        let task = asyncFnc(param)
        pool.push(task)
        if (limitCount < params.length) {
            let e = task.then(() => executing.splice(executing.indexOf(e), 1))
            executing.push(e)
            if (executing.length >= limitCount) {
                await Promise.race(executing)
            }
        }
    }
    return Promise.all(pool)
}

(async () => {
    await asyncPool(5, [1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], (time: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(time);
                resolve(true)
            }, time * 1000);
        })
    })
})()

