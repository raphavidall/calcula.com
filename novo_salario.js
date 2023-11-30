document.addEventListener("DOMContentLoaded", function() {
    var calcularButton = document.getElementById('calcularSalario');
    calcularButton.addEventListener('click', calcularSalario);
});

function calcularSalario() {
    var salario = parseFloat(document.getElementById('salario').value);
    var porcentagemAumento;

    if (isNaN(salario)) {
        alert('Por favor, insira um valor de salário válido.');
        return;
    }
    if(salario <= 1200){
        porcentagemAumento = 1.15;
    }else if(salario < 1200 || salario <= 2400){
        porcentagemAumento = 1.10;
    }else{
        porcentagemAumento = 1.05;
    }
    
    var novoSalario = salario * porcentagemAumento;

    document.getElementById('resultado_novo_salario').textContent = 'Novo salário: R$ ' + novoSalario.toFixed(2);
}
