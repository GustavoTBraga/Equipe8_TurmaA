document.addEventListener('DOMContentLoaded', function() {
    const btn_concluido = document.querySelector('.a_footer');
    var input_cep = document.querySelector('#cep');
    var input_estado = document.querySelector('#estado');
    var input_cidade = document.querySelector('#cidade');
    var input_rua = document.querySelector('#rua');
    var input_numero = document.querySelector('#numero');

    const main = document.querySelector('main');

    const aviso = document.createElement('h4');

    var aviso_content = 'Tudo certo!';

    if (localStorage.length == 0){
        localStorage.setItem('CEP', []);
        localStorage.setItem('Estado', []);
        localStorage.setItem('Cidade', []);
        localStorage.setItem('Rua', []);
        localStorage.setItem('Numero', []);
    }

    function Click_concluido(){

        var lista_cep = localStorage.getItem('CEP');
        var lista_estado = localStorage.getItem('Estado');
        var lista_cidade = localStorage.getItem('Cidade');
        var lista_rua = localStorage.getItem('Rua');
        var lista_numero = localStorage.getItem('Numero');

        var cep = input_cep.value;
        var estado = input_estado.value;
        var cidade = input_cidade.value;
        var rua = input_rua.value;
        var numero = input_numero.value;

        if (cep!='' & estado!='' & cidade!='' & rua!='' & numero!=''){

            if (aviso_content == 'Preencha todos os campos para adicionar o endereço'){
                main.removeChild(aviso)
            }

            localStorage.setItem('CEP'   , lista_cep    + '*' + cep);
            localStorage.setItem('Estado', lista_estado + '*' + estado);
            localStorage.setItem('Cidade', lista_cidade + '*' + cidade);
            localStorage.setItem('Rua'   , lista_rua    + '*' + rua);
            localStorage.setItem('Numero', lista_numero + '*' + numero);

            input_cep.value = ''
            input_estado.value = ''
            input_cidade.value = ''
            input_rua.value = ''
            input_numero.value = ''

            aviso_content = 'Tudo certo!';
            
            window.location.replace("../html/tela_endereco_add.html");
        }
        else{
            aviso_content = 'Preencha todos os campos para adicionar o endereço';
            aviso.innerHTML = aviso_content;
            main.appendChild(aviso);

            aviso.style.textAlign = 'center';
            aviso.style.paddingTop = '2rem';
            aviso.style.fontSize = '1.2rem';
            aviso.style.color = '#f70707';
        }
    }

    btn_concluido.addEventListener('click', Click_concluido);
})