
/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
    let sum = 0;
    let view = new Float32Array(data.arrayBuffer)
    for (let i = data.startIdx; i < data.endIdx; ++i) {
        sum += view[i];
    }
    postMessage(sum);
});

postMessage('ready')