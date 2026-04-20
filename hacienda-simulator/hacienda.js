let salarioBruto = document.getElementById('salarioBruto');
let btnCalcular = document.getElementById('btnCalcular');
let montoNeto = document.getElementById('montoNeto');
let porcentaje = document.getElementById('porcentaje');
let neto;

btnCalcular.addEventListener('click', function() {

    let salario = parseFloat(salarioBruto.value);

    if (salario >= 30000) {

        neto = salario - ((salario * 20) / 100);
        
        montoNeto.innerText = neto;
        porcentaje.innerText = '20';
    
    } else if (salario < 30000) {

        neto = salario - ((salario * 15) / 100);
        
        montoNeto.innerText = neto;
        porcentaje.innerText = '15';
    }

    salarioBruto.value = '';

});