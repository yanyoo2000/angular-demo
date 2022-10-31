// console.log('Start');
// Promise.all([
//     Promise.resolve().then(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 500);
//     }),
//     (async () => {
//         console.log(1);
//     })()
// ]).then(() => {
//     console.log('Eend Promise.all');
// })


Promise.all([
    Promise.resolve(1).then(res => res * 2),
    Promise.resolve(1)
]).then(res => console.log(res))