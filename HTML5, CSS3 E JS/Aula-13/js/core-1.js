function mostrarData () {

var data = new Date();

var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();



var calendario = document.getElementById('calendario');
calendario.innerHTML = "<h2>" + dia + '/' + mes + '/' + ano + "</h2>";

var relogio = document.getElementById('relogio');
relogio.innerHTML = "<h2>" + hora + ':' + min + ':' + seg + "</h2>";
}

setInterval(mostrarData, 1000);

// alert(hora + ':' + min + ':' + seg);

// alert (dia + '/' + mes + '/' + ano);