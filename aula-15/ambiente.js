let num = [5, 2, 8, 9, 3]

num.sort()

num.push(14)

console.log(`Nosso vetor é o ${num}. O vetor tem ${num.length} posições.`)

console.log(`O promeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
