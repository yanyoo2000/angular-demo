new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        resolve(true)
    }, 1000);
    console.log(2);
}).then(() => {
    console.log(4);
})

console.log(3);