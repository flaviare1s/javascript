/*
8. *Manipulação de DOM:*
- Crie uma página HTML com um botão que exibe uma mensagem ao ser clicado usando JavaScript.
- Modifique o estilo de um elemento HTML através do JavaScript.
*/

function mensagem() {
    let body = document.getElementById("body")
    window.alert('Olá! Você Clicou!')
    body.style.backgroundColor = 'blue'
}

