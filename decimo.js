document.addEventListener("DOMContentLoaded", function() {
    var calcularButton = document.getElementById('calcularDecimo');
    calcularButton.addEventListener('click', calcularDecimo);
});

function calcularDecimo() {
    var salario = parseFloat(document.getElementById('salario').value);
    var mesesTrabalhados = parseFloat(document.getElementById('mesesTrabalhados').value);
    console.log(salario, mesesTrabalhados);

    if (isNaN(salario) || isNaN(mesesTrabalhados)) {
        alert('Por favor, insira valor de salário e quantidade de meses válidos.');
        return;
    }
    
    if(mesesTrabalhados > 12 || mesesTrabalhados < 1){
        alert('Número de meses inválido.');
        return;
    }
    
    var decimoTerceiro = (salario/12) * mesesTrabalhados;

    document.getElementById('resultado_decimo').textContent = 'Valor do décimo terceiro: R$ ' + decimoTerceiro.toFixed(2);
}
