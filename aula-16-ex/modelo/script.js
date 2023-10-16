function adicionar() {
    var num = document.getElementById('txtn')
    var n = Number(num.value)
    
    if(n = 0) {
        alert('Erro! Você precisa digitar um número!')
    } else {
        txtt.innerHTML += `Você adicionou o número ${n}`
    }
}