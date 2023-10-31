/*
4. *Manipulação de Strings:*
   - Crie uma função que receba uma string e retorne a mesma string, mas com as palavras em ordem reversa.
   - Implemente uma função que conte quantas vezes uma palavra aparece em uma frase.

*/
/*
function main() {
    let frase = prompt('Digite uma frase!')
    let invertida = frase.split('').reverse().join('')
    alert(invertida)
}
main()
*/

function letraR() {
    let frase2 = 'O rato roeu a roupa do rei de roma'
    let r = 0
    for (let letra of frase2) {
        if (letra === 'r') {
            r++
        }
    }
    console.log(`A frase '${frase2}' tem ${r} letras 'r'.`)
}
letraR()