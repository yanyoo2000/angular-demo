//正确的
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//错误的
function getRandomIntByRound(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min)) + min;
}

let a0 = 0
let a1 = 0
let a2 = 0
let a3 = 0

for (let index = 0; index < 1000000; index++) {
    let a = getRandomIntByRound(-0.5, 4.6)
    if (a === 0) {
        a0++
    }
    if (a === 1) {
        a1++
    }
    if (a === 2) {
        a2++
    }
    if (a === 3) {
        a3++
    }
}

console.log("a0:", a0);
console.log("a1:", a1);
console.log("a2:", a2);
console.log("a3:", a3);

