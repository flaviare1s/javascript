   /*
    2. *Operadores:*
   - Calcule a soma, subtração, multiplicação e divisão de dois números.
   - Verifique se um número é par ou ímpar usando operadores condicionais.
   */

   let n1 = 45
   let n2 = 20
   let soma = n1 + n2
   let subtracao = n1 - n2
   let multiplicacao = n1 * n2
   let divisao = n1 / n2

   if (n1 % 2 === 0) {
    console.log(`${n1} é PAR!`)
   } else {
    console.log(`${n1} é ÍMPAR!`)
   }

   if (n2 % 2 === 0) {
    console.log(`${n2} é PAR!`)
   } else {
    console.log(`${n2} é ÍMPAR!`)
   }

   console.log(`A soma entre ${n1} e ${n2} é ${soma}.`)
   console.log(`A subtração entre ${n1} e ${n2} é ${subtracao}.`)
   console.log(`A multiplicação entre ${n1} e ${n2} é ${multiplicacao}.`)
   console.log(`A divisão entre ${n1} e ${n2} é ${divisao}.`)
