const ctx = document.getElementById('grafico').getContext("2d");
const ctx_2 = document.getElementById('myChart_2');
const porcentagem = document.querySelector('.porcentagem');

console.log(localStorage)

// Valores aleatórios dos gráfiocs -------------------------------------------------------

// Eixo X 
const dia = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
const semana = ['Seg','Ter','Qua','Qui','Sex','Sab','Dom']
const mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const ano = ['2018', '2019', '2020', '2021', '2022', '2023']

//Eixo Y gráfico de barras

//const Yd = ['132','120','135','134','154','160','167','168','179','210','220','250','255','220','210','179','168','167','160','154','134','135','120','132']
//const Ys = ['132','120','135','167','154','148','140']
//const Ym = ['167','168','179','210','220','250','255','220','210','179','168','167']
//const Ya = ['120','135','167','154','148','140']

function CrialistaY(tamanho){
  let lista_Y = []
  while (lista_Y.length < tamanho){
    const valor_aleatorio = Math.random() * (250 - 100) + 100
    lista_Y.push(valor_aleatorio)
  }
  return lista_Y
}

//Valores gráfico de rosca 

//const Yr_d = [75,25]
//const Yr_s = [65,35]
//const Yr_m = [45,55]
//const Yr_a = [90,10]

let meta = 0

function CrialistaY_2(){
  const min = Math.ceil(0);
  const max = Math.floor(100);
  meta = Math.floor(Math.random() * (max - min + 1)) + min;
  return [meta, 100-meta]
}

// Função Gráfico de barras -------------------------------------------------------

function Criagrafico(labels, eixo_Y){
  const data = {
    labels, 
    datasets: [{
      data: eixo_Y,
      label: 'Economia',
      backgroundColor: '#5b7195',
      hoverBackgroundColor: '#e4ebf7',
      hoverBorderColor: '#5b7195',
      hoverBorderWidth: 1.4
    }]
  }

  const config = {
    type: 'bar',
    data,
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            borderColor: 'white',
            color: 'white'
          }
        },
        y: {
          ticks: {
            callback: ''
          },
          grid: {
            borderColor: 'white',
            color: 'white'
          }
        }
      },
      plugins: {
        legend: false,
      },
      elements:{
        bar: {
          borderRadius: 3
        }
      }
    }
  }

  return new Chart(ctx, config);

}

// Função Gráfico de rosca -------------------------------------------------------

function Criagraficorosca(Y) {
  let data_2 = {
    labels: ['CONCLUÍDO', 'p2'],
    datasets: [{
      data: Y,
      backgroundColor: ['#5b7195', '#e4ebf7'],
      borderWidth: 0,
      borderRadius: 20
    }]
  };
  
  let opcoes = {
    cutout: 48,
    plugins: {
      legend: false
    }
  };
  
  let config_2 = {
    type: 'doughnut',
    data: data_2,
    options: opcoes
  };
  
  return new Chart(ctx_2, config_2);

}

// --------------------------------------------------------------------------

const main = document.querySelector('main')

if (localStorage.length == 0){
  localStorage.setItem('CEP', []);
  localStorage.setItem('Estado', []);
  localStorage.setItem('Cidade', []);
  localStorage.setItem('Rua', []);
  localStorage.setItem('Numero', []);
}

var lista_cep = localStorage.getItem('CEP')

if (lista_cep.length<2){
  window.location.replace("../html/tela_principal_sem_end.html");
}

let btn_dia = document.querySelector('#btn_dia')

let btn_atual = btn_dia;
btn_dia.classList.remove('button');
btn_dia.classList.add('button_clicado');
let grafico = Criagrafico(dia,CrialistaY(24));
let grafico_rosca = Criagraficorosca(CrialistaY_2());
porcentagem.innerHTML = meta.toString()+'%';

// --------------------------------------------------------------------------

function Clickdia() {
  if (grafico != null){
    grafico.destroy();
    grafico_rosca.destroy();
  }
  grafico = Criagrafico(dia, CrialistaY(24));
  grafico_rosca = Criagraficorosca(CrialistaY_2());
  porcentagem.innerHTML = meta.toString()+'%';

  btn_atual.classList.remove('button_clicado');
  btn_atual.classList.add('button');
  btn_atual = btn_dia
  btn_dia.classList.remove('button');
  btn_dia.classList.add('button_clicado');
}

btn_dia.addEventListener('click', Clickdia);

// --------------------------------------------------------------------------

let btn_sem = document.querySelector('#btn_sem')

function Clicksem() {
  if (grafico != null){
    grafico.destroy()
    grafico_rosca.destroy();
  }
  grafico = Criagrafico(semana, CrialistaY(7));
  grafico_rosca = Criagraficorosca(CrialistaY_2());
  porcentagem.innerHTML = meta.toString()+'%';

  btn_atual.classList.remove('button_clicado');
  btn_atual.classList.add('button');
  btn_atual = btn_sem
  btn_sem.classList.remove('button');
  btn_sem.classList.add('button_clicado');
}

btn_sem.addEventListener('click', Clicksem);

// --------------------------------------------------------------------------

let btn_mes = document.querySelector('#btn_mes');

function Clickmes() {
  if (grafico != null){
    grafico.destroy()
    grafico_rosca.destroy();
  }
  grafico = Criagrafico(mes, CrialistaY(12));
  grafico_rosca = Criagraficorosca(CrialistaY_2());
  porcentagem.innerHTML = meta.toString()+'%';

  btn_atual.classList.remove('button_clicado');
  btn_atual.classList.add('button');
  btn_atual = btn_mes
  btn_mes.classList.remove('button');
  btn_mes.classList.add('button_clicado');
}

btn_mes.addEventListener('click', Clickmes);

// --------------------------------------------------------------------------

let btn_ano = document.querySelector('#btn_ano');

function Clickano() {
  if (grafico != null){
    grafico.destroy()
    grafico_rosca.destroy();
  }
  grafico = Criagrafico(ano, CrialistaY(6));
  grafico_rosca = Criagraficorosca(CrialistaY_2());
  porcentagem.innerHTML = meta.toString()+'%';

  btn_atual.classList.remove('button_clicado');
  btn_atual.classList.add('button');
  btn_atual = btn_ano
  btn_ano.classList.remove('button');
  btn_ano.classList.add('button_clicado');
}

btn_ano.addEventListener('click', Clickano);

// --------------------------------------------------------------------------