function validaForm() {

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem')
    var erro = document.getElementById('erro');

    if (nome.value == '') {
        var erro = document.getElementById('erro');
        erro.innerHTML = 'Preencha o nome *';
        nome.focus();
        return false;
    }

    if (email.value == '') {
        var erro = document.getElementById('erro');
        erro.innerHTML = 'Preencha o e-mail *';
        email.focus();
        return false;
    }

    if (mensagem.value == '') {
        erro.innerHTML = 'Preencha uma mensagem *';
        mensagem.focus();
        return false;
    }
    
    return false;
}