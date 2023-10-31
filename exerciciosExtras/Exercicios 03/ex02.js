/*
2. *Manipulação de Arrays:*
   - Crie um array de números e encontre o maior e o menor valor nele.
   - Implemente uma função para inverter a ordem dos elementos de um array.
*/

let numeros = [1, 22, 67, 78, 95, 3, 14, 24, 74, 12]

let maior = numeros[0]
let menor = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}
console.log(`O maior número do array é ${maior} e o menor número é ${menor}.`)

numeros.reverse()

console.log(numeros)
