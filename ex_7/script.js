

btnCalcular.addEventListener('click', function() {
    var nMesa = mesa.value
    var prKg = preco.value
    var psPrato = peso.value
    
    var valor = (prKg *psPrato)

    valorBrl = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    mostrarValor = document.getElementById('valorPrato')
    mostrarValor.innerHTML = `
    <div> Prato da mesa: ${nMesa} ficou em ${valorBrl} </div>
    `

})