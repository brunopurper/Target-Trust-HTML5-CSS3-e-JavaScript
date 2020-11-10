function teste() {
    console.log('Executou a teste ()')
}

function mudaDiv() {
    console.log ('Mudou ....')

    var retangulo = document.getElementById ('retangulo');
    retangulo.innerHTML = 'Mudei o conteudo';


}

function alteraSecao() {
    console.log('Altera...');

    var secoes = document.getElementsByTagName('section')
    var cont = 0;

    while (cont < secoes.length ) {
        secoes[cont].style.borderRadius = '50%'

        if (cont % 2 == 1) {
            secoes[cont].style.background = 'green'
        }  

        else {
            secoes[cont].style.background = 'red'

        }

        cont++;
    }



}

function mostrarCaixa () {
    var caixas = document.getElementsByClassName('caixa');

    for (var cont = 0; cont < caixas.length; cont++)
    caixas[cont].style.display = 'inline-block'
}

function alteraTudo () {
    var tetangulo = document.querySelectorAll('#retangulo');
    retangulo.innerHTML = 'Mudei novamente...';
}