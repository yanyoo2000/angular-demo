//break中断当前函数
function treturn() {
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                return;
            }
            console.log('-j', j)
        }
        console.log('i', i)
    }
}

//break中断当前循环语句
function tbreak() {
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                break;
            }
            console.log('-j', j)
        }
        console.log('i', i)
    }
}

//tcontinue中断本次循环
function tcontinue() {
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                continue;
            }
            console.log('-j', j)
        }
        console.log('i', i)
    }
}

tcontinue()
