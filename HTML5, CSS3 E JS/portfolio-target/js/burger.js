function controlaMenu(){
    
    var menu = document.getElementById('menu');

    if (menu.classList.contains('mostraMenu')) {
        menu.classList.remove('mostraMenu');
    } else{
        menu.classList.add('mostraMenu');
    }


    // IMPLEMENTAÇÃO USANDO JS PARA MANIPULAR PROPRIEDADES CSS



 

    // if (menu.style.display == 'block') {

    //     menu.style.display = 'none'
    // } else {
    //     menu.style.display = 'block'
    // }



}




//Linkando a minha variavel burger com o elemento de id=burger do html! 
var burger = document.getElementById('burger');

burger.onclick = controlaMenu;
