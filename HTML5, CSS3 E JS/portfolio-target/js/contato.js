function validaForm() {

    var nome = document.getElementById('nome');

    if (nome.value == '') {
        alert('Preencha o nome!');
        nome.focus();
        return false;
    }

}