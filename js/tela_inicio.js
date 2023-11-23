const btn_novo_cadastro = document.querySelector('.cadastro')

function Click_cadastro(){
    console.log(localStorage)
    localStorage.clear()
    console.log(localStorage)
}

btn_novo_cadastro.addEventListener('click', Click_cadastro)