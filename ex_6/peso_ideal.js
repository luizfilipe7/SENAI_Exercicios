btnCalcular.addEventListener('click', function(){
    
    frmNome = nome.value
    frmAltura = altura.value
    sexoMasculino
        
    if (sexoMasculino.checked === true) {
        fator = 22
    } else {
        fator = 21
    }

    peso = fator * Math.pow(frmAltura, 2).toFixed(2)
   
   
  //  alert(pesoIdeal)

    
    mostrarPeso = document.getElementById('pesoIdeal')
    mostrarPeso.innerHTML = `
    <p> ${frmNome}, o seu peso ideal é ${peso}</p>
    `

})

// Função de reload na página ao clicar no botão "Limpar"

btnLimpar.addEventListener('click', function(){
    document.location.reload(true);
})