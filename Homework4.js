//1 +

function EvenAndUnev(Arr){
let ArrEv 
ArrEv = []
let ArrUnev 
ArrUnev = []
for(let i = 0; i < Arr.length; i++)
if (Arr[i]%2 === 0){
    ArrEv.push(Arr[i])
} else {
    ArrUnev.push(Arr[i])
    }
console.log(ArrEv)
console.log(ArrUnev)
}

//2 կոդը չի աշխատում, միայն մտքերս են 

function CorrSubl(Word, ArrOfAnagrams){
let count = 0
let CorrSubArr = []
let j = 0
for(let i = 0; i<ArrOfAnagrams.length; i++){
    for(j = 0; j<Word.length; j++)
        if (ArrOfAnagrams[i].includes(Word[j])){
            count++
            ArrOfAnagrams = ArrOfAnagrams.replace(ArrOfAnagrams[i],'')
        } if (count === Word.length){
            CorrSubArr.push(ArrOfAnagrams[i])
            console.log(CorrSubArr)
        } else if(j === Word.length-1) {
            count = 0
        }
    }
}



//3 +

function TwoStrings(Str1, Str2){
    if(Str1.includes(Str2)){
        Str1 = Str1.replace(Str2,'')
        console.log(Str1)
    }
}

//4 +

function UniqueElements(Arr){
    let EmptyArr = []
    for(let i=0; i<Arr.length; i++)
        if(EmptyArr.indexOf(Arr[i]) === -1){
            EmptyArr.push(Arr[i])
        }
    console.log(EmptyArr)
}

//5 +

function replaceString(Str, Str1, Str2){
Str = Str.replace(Str1, Str2)
console.log(Str)
}