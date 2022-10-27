// create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(100000000);

let an = performance.now()

let buffer2 = buffer.slice(0)
console.log(performance.now() - an);