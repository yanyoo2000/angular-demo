
let person = {
    age: 20,
    name: 'guo'
}

function getPropValue<T extends object, Key extends keyof T>(obj: T, key: Key): T[Key] {
    return obj[key];
}

console.log(getPropValue(person, 'age'));


