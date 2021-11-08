//2 - Elaborar um programa para uma lan house de shopping - O programa deve ler o valor de cada
//15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor
//a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma
//integral.
//Exemplo:
//Valor a ser pago pelo cliente em 90 minutos: R$ 8,00

btnCalcular.addEventListener('click', function() {
    var minUso = minutos.value
    var frResult = Number(minUso / 15)
    var resultCheio

    if (frResult > frResult.toFixed(0)) {
            resultCheio =  (Number(frResult.toFixed(0)) + 1) 
    }
    else { resultCheio = frResult.toFixed(0)
    }

    valor = resultCheio * 2
    valorBrl = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    mostrarValor = document.getElementById('mostrar')
    mostrarValor.innerHTML = `
    <h5> Valor a pagar ${valorBrl} </h5>
    <p> Total de frações utilizadas: ${resultCheio}</p>
    `
})