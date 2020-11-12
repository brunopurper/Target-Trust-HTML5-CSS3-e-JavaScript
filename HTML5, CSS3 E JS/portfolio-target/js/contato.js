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

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(regex.test(email.value) == false ) {
        erro.innerHTML = 'Digite um e-mail válido *';
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