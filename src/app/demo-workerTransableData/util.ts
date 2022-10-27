export class A {
    age = 20
    show() {
        console.log(this.age);
    }
}

export class dataStorage {

    private static _instance = new dataStorage()

    static instance() {
        return this._instance
    }

    a: A | undefined

    showA() {
        if (this.a) {
            this.a?.show()
        } else {
            console.log('a还没初始化');
        }
    }
}