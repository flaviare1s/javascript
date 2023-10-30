/*
3. *Estruturas Condicionais:*
   - Crie um programa que verifica se a pessoa é maior de idade.
   - Crie um programa que avalia se uma pessoa pode votar.
*/

let idade = 40
 if (idade < 16) {
        console.log('Você é menor de idade e não pode votar.')
 } else if (idade >= 16 && idade < 18) {
        console.log('Você é menor de idade, mas seu voto é opcional.')
 } else if (idade >= 18 && idade <= 70) { 
        console.log('Você é maior de idade e seu voto é obrigatório!')
 } else if (idade > 70) {
        console.log('Você é maior de idade e seu voto é facultativo!')
 } else {
        console.log('Digite um valor válido!')
}
