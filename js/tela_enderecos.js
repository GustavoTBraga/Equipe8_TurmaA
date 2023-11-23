const main = document.querySelector('main');
const lista_ends = document.querySelector('ul');

var i = 0;

console.log(localStorage)

if (localStorage.length > 0){
    while (i < localStorage.length){
        valor = localStorage.getItem(localStorage.key(i))
        console.log(valor)
        console.log(Object.keys(valor))
        var end = document.createElement('li');
        end.innerHTML = valor;
        lista_ends.appendChild(end)
        i++
    }

}