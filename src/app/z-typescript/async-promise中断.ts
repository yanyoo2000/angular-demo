Promise.resolve('000').then((res) => {
    return Promise.reject(res)
}).catch(err => {
    console.error('err:' + err);
}).then((res) => {
    console.log('done:' + res);
})