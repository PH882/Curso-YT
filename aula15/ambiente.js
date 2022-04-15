let num = [8,1,7,4,2,9]

num.push(3) //empura esse numero pa dentro dos cochetes
num.sort()  //coloca numa ordem crescente
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
console.log(`O valor oito esta na posição ${pos}`)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
/*
for(let pos=0;pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
/*
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/