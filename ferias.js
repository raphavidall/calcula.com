document.addEventListener("DOMContentLoaded", function() {
    var calcularButton = document.getElementById('calcularFerias');
    calcularButton.addEventListener('click', calcularFerias);
});

function calcularFerias() {
    var salario = parseFloat(document.getElementById('salario').value);
    var proventosFerias = Math.round(salario/3);

    if (isNaN(salario)) {
        alert('Por favor, insira um valor de salário válido.');
        return;
    }
    
    var valorFerias = salario + proventosFerias;

    document.getElementById('resultado_ferias').textContent = 'Valor das férias: R$ ' + valorFerias.toFixed(2);
}
