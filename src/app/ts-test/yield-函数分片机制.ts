

function timeSlice(fnc: Function, that: any, time = 10) {
    return function (...args: any) {
        //输入的函数fnc增加调用者that
        const fnc_ = fnc.call(that, ...args)

        if (fnc.constructor.name === 'GeneratorFunction') {
            let data: any
            return new Promise(function go(resolve, reject) {
                try {
                    let start = performance.now()
                    while (!data.done && performance.now() - start < time) {
                        data = fnc_.next()
                    }
                    if (data.done) {
                        return resolve(data.value)
                    } else {
                        setTimeout(() => {
                            go(resolve, reject)
                        });
                    }
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            return fnc_()
        }
    }
}