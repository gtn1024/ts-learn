// 使用 new Boolean() 不是基本类型（装箱类型）
// let b1: boolean = new Boolean(1)

const b = Boolean(1)

const decNum = 6        // 十进制
const hexNum = 0xf00d   // 十六进制 61453
const binNum = 0b1010   // 二进制   10
const octNum = 0o744    // 八进制   484
const notANum = NaN
const infinityNum = Infinity

console.log(decNum, hexNum, binNum, octNum, notANum, infinityNum)

const n = 'Tom'
const a = 16
const sentence = `Hi, my name is ${n},
and I am ${a} years old.`
console.log(sentence)

let p: any = 1
console.log(p)
p = 'a'
console.log(p)
