// Exercícios do Curso de Algoritmo

// Ex. 01:
// console.log('Olá, Mundo!');

// Ex. 02:
/*
let nome = 'Flávia';

console.log('Qual é o seu nome?');
console.log(`Olá ${nome}, é um prazer te conhecer!`);
*/


// Ex. 03:
/*
let nome = 'Maria do Carmo'
let salario = 1850.45

console.log(`O funcionário ${nome} tem um sário de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
*/

// Ex. 04:
/*
let n1 = 3
let n2 = 5
let total = n1 + n2

console.log(total)
*/

// Ex. 05:
/*
let n1 = 4.5
let n2 = 8.5
let media = (n1 + n2) / 2

console.log(media)
*/

// Ex. 06:
/*
let n = 9
let ant = n - 1
let suc = n + 1

console.log(`O antecessor de ${n} é ${ant} e o sucessor é ${suc}.`)
*/

// Ex. 07: Função triângulo
/*
function triangulo() {
    const l1 = prompt('Digite o lado 1');
    const l2 = prompt('Digite o lado 2');
    const l3 = prompt('Digite o lado 3');

    if (l1 == l2 && l2 == l3) {
        console.log('O triângulo é equilátero!')
    } else if (l1 != l2 && l1 !=l3 && l2 != l3) {
        console.log('O triângulo é escaleno!')
    } else {
        console.log('O triângulo é isósceles!')
    }
}
triangulo()
*/

// Ex. 08: Idade:
/*
function idade() {

    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = prompt('Em que ano você nasceu?')
    var a = parseInt(anoAtual)
    var n = parseInt(anoNasc)
    var res = a - n

    alert(`Sua idade é ${res} anos.`)

    if(res >= 18) {
        alert('Você é maior de idade!')
    } else {
        alert('Você ainda é menor de idade.')
    }
}
idade()
*/

// Ex. 09: Moeda:
/*
function moeda() {
    var reais = prompt('Quantos reais você tem?')
    var dolar = reais / 5.03

    alert(`Você tem ${dolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} dólares.`)
}
moeda()
*/

// Ex. 10: Temperatura:
/*
function temperatura() {
    var f = prompt('Qual a temperatura aí nos EUA?')
    var c = (f - 32) / 1.8

    alert(`No Brasil estaria ${parseInt(c)}ºC.`)
}
temperatura()
*/

// Ex. 11: Par ou Ímpar:
/*
function parImpar() {
    var n = Number(prompt('Digite um número'));

    if(n % 2 === 0) {
        alert('O número que você digitou é par!')
    } else {
        alert('O número que você digitou é ímpar!')
    }
}
parImpar()
*/

// Ex. 12: Cálculo do IMC:
/*
function imc(){
    var massaInput = prompt('Qual o seu peso?');
    var alturaInput = prompt('Qual a sua altura?');

    massaInput = massaInput.replace(',', '.');
    alturaInput = alturaInput.replace(',', '.');

    var massa = parseFloat(massaInput);
    var altura = parseFloat(alturaInput);

    var imc = massa / (altura ** 2)

    alert(`Seu IMC é ${imc}.`)

    if(imc >= 18.5 && imc < 25) {
        alert('Parabéns! Você está no seu peso ideal!')
    } else {
        alert('Você não está na faixa de peso ideal!')
    } 
}
imc()
*/

// Ex. 13: Faixas de IMC:
/*
function imc(){
    var massaInput = prompt('Qual o seu peso?');
    var alturaInput = prompt('Qual a sua altura?');

    massaInput = massaInput.replace(',', '.');
    alturaInput = alturaInput.replace(',', '.');

    var massa = parseFloat(massaInput);
    var altura = parseFloat(alturaInput);

    var imc = massa / (altura ** 2)

    alert(`Seu IMC é ${imc}.`)

    if(imc < 17) {
        alert('Você está muito abaixo do peso!')
    } else if(imc > 17 && imc < 18.5) {
        alert('Você está abaixo do peso!')
    } else if(imc >= 18.5 && imc < 25) {
        alert('Parabéns! Você está no seu peso ideal!')
    } else if(imc > 25 && imc < 30) {
        alert('Você está com sobrepeso!')
    } else if(imc > 30 && imc < 35) {
        alert('Você está na faixa de obesidade!')
    } else if(imc > 35 && imc < 40) {
        alert('Você tem obesidade severa!')
    } else {
        alert('Cuidado! Você está com obesidade mórbida!')
    }
}
imc()
*/

// Ex. 14: IMC Switch Case:
/*
    var massaInput = prompt('Qual o seu peso?');
    var alturaInput = prompt('Qual a sua altura?');

    massaInput = massaInput.replace(',', '.');
    alturaInput = alturaInput.replace(',', '.');

    var massa = parseFloat(massaInput);
    var altura = parseFloat(alturaInput);

    var imc = massa / (altura ** 2)

    alert(`Seu IMC é ${imc}.`)

    switch(true) {
        case(imc < 17):
        alert('Você está muito abaixo do peso!')
        break
        case(imc > 17 && imc < 18.5):
        alert('Você está abaixo do peso!')
        break
        case(imc >= 18.5 && imc < 25):
        alert('Parabéns! Você está no seu peso ideal!')
        break
        case(imc > 25 && imc < 30):
        alert('Você está com sobrepeso!')
        break
        case(imc > 30 && imc < 35):
        alert('Você está na faixa de obesidade!')
        break
        case(imc > 35 && imc < 40):
        alert('Você tem obesidade severa!')
        break
        default:
        alert('Cuidado! Você está com obesidade mórbida!')
        break
    }
imc()
*/

// Ex. 15: Estrutura de repetição while:
/*
var c = 0

while (c <= 10) {
    console.log(`Contei ${c}`)
    c++
}
console.log('Terminei de contar!')
*/

// Ex.16: Do while
/*
var c = 0
do {
    console.log(`Contei ${c}`)
    c++
} while (c <= 10)
console.log('Terminei de contar!')
*/

// Ex.17: Ordem descrecente:
/*
var c = 10

while (c >= 0) {
    console.log(`Contei ${c}`)
    c--
}
console.log('Terminei de contar!')
*/

// Ex.18: 
/*
function main() {
    var c = 0
    var n = prompt('Até quanto você quer contar?')

    while (c <= n) {
        alert(`Contei ${c}`)
        c++
    }
    alert('Terminei de contar!')
}
main()
*/

// Ex.19: Incremento diferente de 1:
/*
var c = 0

while (c <= 10) {
    console.log(`Contei ${c}`)
    c+=3
}
console.log('Terminei de contar!')
*/

// Ex. 20: For:
/*
for(var c = 0; c <= 10; c++) {
    console.log(`Contei ${c}`)
}
*/

// Ex. 21: Combinações (usei uma estrutura "for" dentro da outra):
/*
for(var c1 = 1; c1 <= 3; c1++) {
    for(var c2 = 1; c2 <= 3; c2++)
    console.log(c1, c2)
}
*/

// Ex. 22: Sequência de Fibonacci: