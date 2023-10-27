// Crie uma função para calcular o fatorial de um número:

function fatorial() {
    const n = Number(prompt('Digite um número inteiro!'))
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial())