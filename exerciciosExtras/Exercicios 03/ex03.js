/*
3. *Loops e Condicionais:*
   - Escreva um programa que conte de 1 a 100, mas para múltiplos de 3, exiba "Fizz", e para múltiplos de 5, exiba "Buzz".
   - Crie um programa que verifica se um número é primo.
*/

function FizzBuzz() {  
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }  
}
FizzBuzz()

function primo(n) {
    if (n <= 1) {
        console.log(`O número ${n} não é primo!`)
        return
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`O número ${n} não é primo!`)
        return
        }
    }
    console.log(`O número ${n} é primo!`)
}
primo(7)