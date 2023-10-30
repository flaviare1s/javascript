 /*
    1. *Variáveis e Tipos de Dados:*
   - Crie uma variável para armazenar seu nome e exiba-a no console.
   - Declare variáveis para idade, altura e status de estudante.
   */

   let nome = prompt('Qual é o seu nome?')
   console.log(`Nome: ${nome}`)
   let altura = prompt('Qual a sua altura?')
   console.log(`Altura: ${altura}m`)
   let estudante = prompt('Você é estudante? SIM ou NÃO') 
    if (estudante === 'SIM' || estudante === 'sim' || estudante === 'Sim') {
        console.log(true) 
    } else {
        console.log(false)
    }
   
    