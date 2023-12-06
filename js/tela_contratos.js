document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.length == 0){
        localStorage.setItem('CEP', []);
      }
    
      var lista_cep = localStorage.getItem('CEP')
    
      if (lista_cep.length<2){
        window.location.replace("../html/tela_contratos_sem_end.html");
      }
});