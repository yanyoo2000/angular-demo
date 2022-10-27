let fn_promise = async () => {
    let sum = 0
    for (let index = 0; index < 10; index++) {
        sum += index
    }
    return sum
}

let fn_getResolve = async () => {
    let res = await fn_promise()
    console.log(res);
}

fn_getResolve()
