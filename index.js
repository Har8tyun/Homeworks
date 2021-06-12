//1)

let n1
let n2
a = a + b
b = a - b
a = a - b

//2)

let number
let lD
lD = number % 10
number = Number(String(lD) + String((number - lD) / 10))

//3)

let n1
let n2
let n3
let n4
let n5
console.log((n1 + n2 + n3 + n4 + n5) / 5)

//4)

let n1
let n2
let n3
let maxV
let minV
maxV = Math.max(n1, n2, n3)
minV = Math.min(n1, n2, n3)
if ((maxV === n1) && (minV === n2)) {
    console.log(minV + ", " + n3 + ", " + maxV)
} else if ((maxV === n2) && (minV === n1)) {
    console.log(minV + ", " + n3 + ", " + maxV)
} else if ((maxV === n1) && (minV === n3)) {
    console.log(String(minV) + ", " + String(n2) + ", " + String(maxV))
} else if ((maxV === n3) && (minV === n1)) {
    console.log(minV + ", " + n2 + ", " + maxV)
} else if ((maxV === n2) && (minV === n3)) {
    console.log(minV + ", " + n1 + ", " + maxV)
} else if ((maxV === n3) && (minV === n2)) {
    console.log(minV + ", " + n1 + ", " + maxV)
}

//5)

var n = +prompt
var i = 0
var j = 0

if (n % 2 === 0 && n < 10) {
    i += 1;
}

if (n % 30 === 9) {
    j += 1;
}

