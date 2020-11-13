function controlaMenu(){
    alert('Controla Menu');
}


//Linkando a minha variavel burger com o elemento de id=burger do html! 
var burger = document.getElementById('burger');

burger.onclick = controlaMenu;
