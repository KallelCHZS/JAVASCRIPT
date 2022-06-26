var num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O valor tem ${num.length} posição`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('A posiçao não foi encontrada')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}