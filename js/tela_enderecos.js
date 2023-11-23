const lista_end = document.querySelector('ul');

var lista_cep = []
var lista_estado = []
var lista_cidade = []
var lista_rua = []
var lista_numero = []

var i = 1;

if (localStorage.length > 0){
    const cep = localStorage.getItem('CEP')
    const estado = localStorage.getItem('Estado')
    const cidade = localStorage.getItem('Cidade')
    const rua = localStorage.getItem('Rua')
    const numero = localStorage.getItem('Numero')

    lista_cep = cep.split('*');
    lista_estado = estado.split('*');
    lista_cidade = cidade.split('*');
    lista_rua = rua.split('*');
    lista_numero = numero.split('*');
}

while (i < lista_cep.length){
    var end = document.createElement('li');
    end.innerHTML = lista_rua[i] +', '+ lista_numero[i] +', '+ lista_cidade[i] +', '+ lista_estado[i];
    lista_end.appendChild(end)
    i++
}