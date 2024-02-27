var form = document.getElementById('valida-form')
var linhas = ''


form.addEventListener('submit',function(e) {
    e.preventDefault()

    adicionarLinha()

})

function adicionarLinha() {
    var inputNome = document.getElementById('nome')
    var inputContato = document.getElementById('contato')
    var res = document.getElementById('res')
    var mensagemSucesso = document.getElementById('res') //designando o ID da div onde está a mensagem de sucesso


    if(inputNome.value.length == 0 || inputContato.value.length == 0 ){
        alert("ERRO, nome ou contato está em branco")
    }else if(inputNome.value.split(' ').length < 2){ //split() para dividir o nome em um array onde cada elemento é uma palavra do nome. Em seguida, verificamos se este array tem pelo menos dois elementos, o que indicaria um nome e um sobrenome.
        alert("ERRO,nome não está completo")
    }
    else {
        mensagemSucesso.textContent = 'Seu número ' + inputContato.value + ' foi agendado!'// fazer aparecer oq foi digitado pelo usuário
        mensagemSucesso.style.display = 'block';
        let linha = '<tr>'
    linha += `<td> ${inputNome.value} </td>`
    linha += `<td> ${inputContato.value} </td>`
    linha +='</tr>'

    linhas += linha

    inputNome.value = ''
    inputContato.value = ''


    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
    
    
}







