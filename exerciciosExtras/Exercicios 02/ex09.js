/*
9. *Eventos:*
   - Adicione um evento de clique a um botão e realize uma ação quando ele for clicado.
   - Crie um evento que responda a pressionar uma tecla no teclado.
   */

   function evento() {
    alert('Você clicou no botão e a cor da tela será mudada!')
    document.body.style.backgroundColor = 'red'
   }

   document.addEventListener('keydown', function(event2) {
    if(event2.key === 'g') {
        alert('Você pressionou a tecla g') 
    } else {
        alert('Você pressionou outra tecla!')
    }
   })