let a = {
    age: 50,
    number: 100
}

let b = {
    age: 6666,
    number: 100
}

let f = {
    age: 50,
    number: 100
}

let arr = []
arr.push(a)
arr.push(b)
console.log(arr.indexOf(arr.filter(item => item.age === f.age)[0]));


