//1  +

let Num 
let m = 10
let n = 1
while(Num/m >= 1){
    m = m*10
    n++
} 
let i = 1
let k = 0
let j
for (j = 0; j < n; j++)
if(((Num - Num%i)/i)%10 === 9 ){
    i = i*10
    k++
} else {
    i = i*10
}
console.log(k)

//2  +


let n1 
let n2 
// n1 < n2
let i = 0
let emptyStr = []
while (Math.pow(2,i)<= n1){
    i++
}
while (Math.pow(2,i) <= n2 && Math.pow(2,i) >= n1){
	emptyStr.push(Math.pow(2,i))
	i++
} 
console.log(emptyStr)

//3  +


let Num = prompt
let m = 10
let n = 1
let Num1 = ''
while(Num/m >= 1){
    m = m*10
    n++
}
Num1 = Num1 + Num[0]
for (let j = 0; j < n; j++)
{
if (Number(Num[j])%2 === 0 && Number(Num[j+1])%2 === 0){
    Num1 = Num1 + "-" + Num[j+1] 
} else {
    Num1 = Num1 + Num[j+1]
}
} 
console.log(Num1)

//4 +

let Num = prompt()
let Mun = ""
let i
for(i = Num.length - 1; i >= 0; i--)
Mun += Num[i]
console.log(Mun)

//5

let primes = []
let n = 5
for(let i = 2; i<1000; i++){
    let isPrime = true
    for (let j = 2; j<i; j++){
       if(i % j === 0){
            isPrime = false
            break
        }
    }
    if (isPrime){
        primes.push(i)
    }
}console.log(primes[n-1])