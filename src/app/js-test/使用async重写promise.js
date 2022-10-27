// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// }).then((result) => {
//     console.log(result);
// })


(async () => {
    let res = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    })
    console.log(res);
})()



// (async () => {
//     console.log(
//         await (async () => {
//             setTimeout(() => 1, 1000);
//         })()
//     );
// })()


