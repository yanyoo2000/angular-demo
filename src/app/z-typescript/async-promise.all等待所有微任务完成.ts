console.log(0);
Promise.all([
    Promise.resolve(1).then((res) => {
        console.log(res);
        setTimeout(() => {
            console.log(11);
        }, 500);
        return res
    }),
    Promise.resolve(2).then(async (res) => {
        console.log(res);
        return await Promise.resolve(res * 2)
    }),
    (async () => {
        let res = 3
        console.log(res);
        return Promise.resolve(res * 3)
    })()
]).then((res) => {
    console.log(res);
})
