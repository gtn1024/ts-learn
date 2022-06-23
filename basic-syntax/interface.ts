interface A {
    a: string
    b: string

    getA(): string
}

interface B {
    a: string
    c: number
}

let a: A = {
    a: "a",
    b: "b",
    getA() {
        return this.a;
    }
}
let b: B = {
    a: "a",
    c: 12
}

const c: A & B = {
    a: "a",
    b: "b",
    c: 0x12,
    getA() {
        return this.a;
    }
}
console.log(a)
console.log(b)
console.log(c)
console.log(c.getA())

interface C {
    a: number
    b?: number
}

const cc: C = {
    a: 1
}
console.log(cc.b)

interface D {
    name: string
    age?: number

    [propName: string]: any
}

const d: D = {
    name: '小明',
    age: 18,
    gender: 1
}
console.log(d['name'])
console.log(d['gender'])

interface E {
    readonly a: number
    b: number
}

const e: E = {
    a: 1, b: 2
}
// TS2540: Cannot assign to 'a' because it is a read-only property.
// e.a = 22
