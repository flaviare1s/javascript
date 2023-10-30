/*
1. *Funções:*
   - Crie uma função que receba dois números como parâmetros e retorne a soma deles.
   - Escreva uma função que calcule o fatorial de um número.
*/

function soma() {
    const n1 = Number(prompt('Digite um número!'))
    const n2 = Number(prompt('Digite outro número!'))
    const total = n1 + n2
    alert(`A soma entre ${n1} e ${n2} é ${total}`)
}
soma()

function fatorial() {
    const n = parseInt(prompt('Agora digite um número inteiro!'))
    let fat = 1
    for (c = n; c > 1; c--) {
        fat *= c
    }
    alert(`O fatorial de ${n} é ${fat}!`)
}
fatorial()

