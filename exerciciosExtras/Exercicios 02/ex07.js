/*
7. *Objetos:*
   - Crie um objeto representando uma pessoa com propriedades como nome, idade e cidade.
   - Acesse e modifique propriedades de um objeto.
*/

let pessoa = {
    nome: 'João',
    idade: 21,
    cidade: 'Fortaleza'
}

console.log(pessoa)
console.log(`O nome da pessoa é ${pessoa.nome}`)

pessoa.idade = 22

console.log(`${pessoa.nome} fez ${pessoa.idade} anos de idade.`)