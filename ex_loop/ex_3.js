// Um criador de coelhos, multiplica sua criação a cada ano em 7 vezes. Elaborar um programa que leia o
// número inicial de coelhos e uma quantidade de anos. Exiba ano a ano o númeromédio previsto de
// coelhos. Validar a entrada para que o número inicial de coelhos seja maior ou igual a 3.
// Ex.:
// NUMERO DE COELHOS 8
// NUMERO DE ANOS 3
// ---
// 1o ano: 8 coelhos
// 2o ano: 56 coelhos
// 3o ano: 392 coelhos

function multiplicaCoelhos () {
    
    if (coelhos.value == "" || coelhos.value < 2){
    alert("Valor mínimo de coelhos: 3 ")
    return
    }

    if (anos.value == "" || anos.value < 1){
    alert("Digite valor em anos maior ou igual a 1")
    return
    }

    var qtdAno = anos.value
    var qtdCoelhos = coelhos.value
    textoTela = ""

    for(var i = 1; i <= qtdAno; i++){
        textoTela += `${i}º ano: ${qtdCoelhos} coelhos. <br>`
        qtdCoelhos = qtdCoelhos * 7
        mostrar.innerHTML = textoTela
    }

}

show.addEventListener('click', multiplicaCoelhos)
  