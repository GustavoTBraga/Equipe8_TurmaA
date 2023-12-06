document.addEventListener('DOMContentLoaded', function() {

    const grafico_economia = document.querySelector('#myChart_2');

    const data_grafico_prod_pess = {
        labels: ['Economia', ''],
        datasets: [{
        data: [76.4,100-76.4],
        backgroundColor: ['#5b7195', '#e4ebf7'],
        borderWidth: 0,
        borderRadius: 20
        }]
    };
    
    const opcoes_grafico_prod_pess = {
        cutout: 48,
        plugins: {
        legend: false
        }
    };
    
    const config_grafico_prod_pess = {
        type: 'doughnut',
        data: data_grafico_prod_pess,
        options: opcoes_grafico_prod_pess
    };
    
    new Chart(grafico_economia, config_grafico_prod_pess);

})