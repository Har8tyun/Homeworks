//1

let a = +prompt('number a')
let b = +prompt('number b')
let step = +prompt('choose a step')
let j = 0
let arr = []
for (let i = 0; i <= (b-a); i += step)
    arr.push(a+i)
console.log(arr)

//2

let NumArr
let maxN = NumArr[0]
for (let i = 1; i < NumArr.length; i++)
    if (maxN < NumArr[i]){
        maxN = NumArr[i]
    }
console.log(maxN)

//3

let Arr 
let ReArr = []
for (let i = (Arr.length - 1); i >= 0; i--)
    ReArr.push(Arr[i])
console.log(ReArr)

//4

let Arr 
let Arr2 = []
for (let i = 0; i < Arr.length; i++)
    Arr2.push(Arr[i] * Arr[i+1])
    Arr2.length = Arr.length-1
console.log(Arr2)

//5

let Arr 
let l = Arr.length
let N 
for (i=0; i<Arr.length-1; i++)
    if(Arr[i] === N){
        Arr.splice(i,1)
    } 
if(Arr.indexOf(N) === -1 && Arr.length === l){
    Arr.push(N)
}
console.log(Arr)