function test() {
    for (let index = 0; index < 100; index++) {
        console.log('index', index);
        if (index > 20) {
            if (index > 30) {
                return
            }
        }
    }
}

test()
